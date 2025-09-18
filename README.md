<h1 align="center">
<img src="public/favicon.ico" alt="planet" width="24" height="24" />
    Countries App
</h1>


<div align="center">
    <img align="center" width='500' src="public/home.png" alt="Countries App Screenshot" />
   

</div>


## 📝 About
A React application that displays information about countries using data from the REST Countries API. It features a list of countries and, when selected, it will present details of the country such as population, capital, language, among others

## 🚀 Features
- **React**: A JavaScript library for building user interfaces.
- **React Router**: For handling routing within the application.
- **Vite**: A fast build tool and development server.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **REST Countries API**: To fetch country data.
- **Responsive Design**: Ensures the application looks good on all devices.


## ⏱️ Getting Started

### Installation

Install the dependencies:

```bash
## clone the repo
$ git clone https://github.com/polyanetuag/countries-list.git

# enter the project directory
$ cd countries-list

# install dependencies
$ npm install or yarn

# start the development server
$ npm run dev or yarn dev

```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
