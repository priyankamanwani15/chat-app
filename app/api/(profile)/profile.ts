// src/pages/api/current-profile.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { getAuth } from '@clerk/nextjs/server';
import { db } from '@/lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { userId } = getAuth(req); // Get userId from Clerk auth

    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const profile = await db.profile.findUnique({
      where: { userId },
    });

    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }

    res.status(200).json(profile);
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
