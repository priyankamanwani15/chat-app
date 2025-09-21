# 💬 Channelize: A Real-Time Communication Platform

### Created by [Rishabh Sharma]

Channelize is a full-stack, real-time team communication platform inspired by Discord, designed to streamline collaboration for any organization. It offers secure 1:1 and group messaging, voice/video calls, dynamic server and channel management, file sharing, and role-based permissions.

Built with a modern tech stack, Channelize provides a scalable, all-in-one internal communication solution that feels both powerful and intuitive.

*[🚀 View the Live Demo Here!](https://chat-application-6g1x.onrender.com)*

---

## ✨ Key Features

* *Real-Time Messaging: Instant 1:1 and group messaging powered by **Socket.io* for a seamless chat experience.
* *Server & Channel Management*: Create servers, organize them with text, voice, and video channels, and manage everything with ease.
* *Voice and Video Calls: High-quality, low-latency audio and video calls integrated directly into channels, powered by **LiveKit*.
* *Role-Based Permissions*: A robust member management system with roles like ADMIN, MODERATOR, and GUEST to control permissions.
* *Secure Authentication: Safe and easy user authentication handled by **Clerk*, including social logins.
* *Media Sharing: Upload images, PDFs, and other files directly in messages, with secure handling by **UploadThing*.
* *Invite System*: Generate secure, time-limited invite links to easily add new members to a server.
* *Infinite Scrolling*: Efficiently load and browse message history in busy channels.
* *Responsive Design: A beautiful and functional UI that works perfectly on any device, built with **TailwindCSS* and *shadcn/ui*.

---

## 🛠️ Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=prisma&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![LiveKit](https://img.shields.io/badge/LiveKit-8539C4?style=for-the-badge&logo=livekit&logoColor=white)
![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)
![UploadThing](https://img.shields.io/badge/UploadThing-FF5722?style=for-the-badge&logo=uploadthing&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-4A6741?style=for-the-badge&logo=zustand&logoColor=white)

---

## 📸 Platform Showcase

Here's a glimpse of the Channelize platform in action.

<div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
  <img src="https://github.com/user-attachments/assets/c869723f-2e9f-45dc-a328-5f5489a3a7c7" width="400"/>
  <img src="https://github.com/user-attachments/assets/46c8ba2d-fe76-4b41-bc83-b026d4f99b52" width="400"/>
  <img src="https://github.com/user-attachments/assets/d254e8f4-88a2-42a4-8572-8b49af0caa51" width="400"/>
  <img src="https://github.com/user-attachments/assets/b5c4fe02-4e38-44bb-ae25-3fff152cb435" width="400"/>
  <img src="https://github.com/user-attachments/assets/b2c11c05-f1fc-4847-975e-78df3d876fbc" width="400"/>
  <img src="https://github.com/user-attachments/assets/50e7edf5-87ca-45e9-a8c4-e1f0462c55f3" width="400"/>
  <img src="https://github.com/user-attachments/assets/08b7d4a5-e699-4895-8d28-ea259a775b69" width="400"/>
  <img src="https://github.com/user-attachments/assets/dd58d890-1c81-4722-9c17-1b51cb19f72f" width="400"/>
</div>

---

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine.

### 1. Prerequisites

Make sure you have the following installed:
* Node.js (v18 or higher)
* npm, yarn, or pnpm
* A MySQL database (e.g., via PlanetScale, a local instance, or Docker)

### 2. Clone the Repository

Clone the repository with git clone https://github.com/your-username/channelize.git and navigate into the project directory with cd channelize.

### 3. Install Dependencies

Install the necessary packages by running npm install (or yarn install / pnpm install).

### 4. Set Up Environment Variables

Create a .env.local file in the root of your project by running cp .env.example .env.local.

Now, fill in the .env.local file with your credentials from the following services:
* *Clerk*: for authentication.
* *UploadThing*: for file storage.
* *LiveKit*: for voice/video calls.
* *MySQL Database*: your database connection string.

```env
# Database
DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# UploadThing File Storage
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

# LiveKit Voice/Video
LIVEKIT_API_URL=
LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
NEXT_PUBLIC_LIVEKIT_URL=
