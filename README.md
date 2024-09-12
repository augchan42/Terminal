# Terminal - LLM Chat Interface

Terminal is a Next.js project that provides a unique chat interface styled like a retro computer terminal. It uses GPT-4 to power an AI assistant, creating an engaging and nostalgic user experience.

## Features

- Retro terminal-style UI
- Real-time chat with GPT-4 powered AI
- Responsive design
- Keyboard input handling
- Auto-scrolling messages

## Technologies Used

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- AI SDK (@ai-sdk/openai, @ai-sdk/react)
- Zod for schema validation

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variables (you'll need an OpenAI API key)
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `src/app/`: Contains the main application code
- `src/app/page.tsx`: The main chat interface component
- `src/app/api/chat/route.ts`: API route for handling chat requests
- `src/styles/Home.module.css`: Styles for the terminal interface

## Deployment

This project is set up for easy deployment on Vercel. Simply connect your GitHub repository to Vercel for automatic deployments.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).