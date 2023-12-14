import React from 'react';

const ProjectBrief = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Theometrics Telegram Bot Project Brief  ❤️</h1>
      
      {/* Tech Stack */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
        <ul className="list-disc list-inside">
          <li>Telegram Bot API: For the bot interface.</li>
          <li>Python: Primary programming language.</li>
          <li>AWS Services:</li>
          <ul className="list-disc list-inside ml-6">
            <li>AWS Lambda: For serverless functions.</li>
            <li>AWS AppSync: For GraphQL database.</li>
            <li>AWS S3: For file and media storage.</li>
            <li>AWS API Gateway: For RESTful API interfaces.</li>
            <li>Redis: For hot caching (via Amazon ElastiCache).</li>
          </ul>
          <li>OpenAI API: For natural language processing and chat functionalities.</li>
          <li>Pinecone: For vector database management.</li>
          <li>Jira API: For project management features.</li>
          <li>Heroku: For hosting and deployment.</li>
          <li>GitHub: For version control and CI/CD pipelines.</li>
          <li>Docker: For containerization and consistency across development and production environments.</li>
        </ul>
      </section>

      {/* Project File Structure */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Project File Structure</h2>
        <div className="font-mono bg-gray-100 p-3">
          <p>theometrics_telegram_bot/</p>
          <p className="ml-4">├── bot/</p>
          <p className="ml-8">│ ├── __init__.py</p>
          <p className="ml-8">│ ├── main.py                # Main bot functionality</p>
          <p className="ml-8">│ ├── commands.py            # Command definitions and handlers</p>
          <p className="ml-8">│ ├── conversation_handler.py# Natural language processing integration</p>
          <p className="ml-8">│ └── utils.py               # Utility functions</p>
          <p className="ml-4">├── integrations/</p>
          <p className="ml-8">│ ├── __init__.py</p>
          {/* ... Continue the file structure in the same manner */}
        </div>
      </section>

      {/* Bot Actions */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Bot Actions</h2>
        <div>
          <h3 className="text-lg font-semibold mt-4">User Registration:</h3>
          <ul className="list-disc list-inside">
            <li>Register new user.</li>
            <li>Admin approval for new users.</li>
            <li>Set user roles and permissions.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4">Project Management:</h3>
          <ul className="list-disc list-inside">
            <li>Create a new project.</li>
            <li>View and update project details.</li>
            <li>Assign users to a project.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4">Task Management:</h3>
          <ul className="list-disc list-inside">
            <li>Create a new task within a project.</li>
            <li>Assign tasks to users.</li>
            <li>Check the status of tasks.</li>
            <li>Update task details and status.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4">Knowledge Base and Chat:</h3>
          <ul className="list-disc list-inside">
            <li>Answer queries using OpenAI.</li>
            <li>Store and retrieve chat logs from Pinecone.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4">File and Media Management:</h3>
          <ul className="list-disc list-inside">
            <li>Upload and download files to/from AWS S3.</li>
            <li>Associate files with specific projects or tasks.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4">Feedback and Improvement:</h3>
          <ul className="list-disc list-inside">
            <li>Provide feedback about the bot.</li>
            <li>Report issues or suggest enhancements.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4">Notifications and Alerts:</h3>
          <ul className="list-disc list-inside">
            <li>Send out automated alerts for task deadlines.</li>
            <li>Broadcast messages from admins to users.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4">Logging and Monitoring:</h3>
          <ul className="list-disc list-inside">
            <li>Log user interactions and errors.</li>
            <li>Monitor bot performance and usage statistics.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4">Company Calendar:</h3>
          <ul className="list-disc list-inside">
            <li>Admins can add events and details to the calendar.</li>
            <li>Users can submit events for approval.</li>
            <li>View the calendar and its events.</li>
            <li>Indicate attendance for events.</li>
          </ul>
        </div>
      </section>

      {/* Add more sections as needed */}
    </div>
  );
}

export default ProjectBrief;
