# art-folio

To fetch all folder file names into a neat .txt in the current directory:
```bash
dir /B > filelist.txt
```

Local testing for idiots:

#### Local Development with `http-server`

1. **Install Node.js**:
   - Download and install [Node.js](https://nodejs.org/). Opt for the LTS version.

2. **Open Command Prompt or Terminal**:
   - **Windows**: Press `Win + R`, type `cmd`, and hit Enter.
   - **Mac**: Open the Terminal application.
   - Navigate to your project directory:
     ```bash
     cd path/to/your/repo/folder
     ```

3. **Install `http-server`**:
   - Install the `http-server` package globally. This allows you to run the server from any directory:
     ```bash
     npm install http-server -g
     ```

4. **Run the Server**:
   - Start the server from your project directory:
     ```bash
     http-server . -p 8000
     ```

5. **Access Your Site**:
   - Open a browser and visit:
     ```
     http://localhost:8000
     ```

This setup provides a zero-configuration tool for local development. You can see live changes by refreshing the browser after editing your files.

## Features

- [grid](https://masonry.desandro.com) layout for pictures
- deploy on github pages
- lightweight
- the final result should look like a pinterest feed (fixed column width but variable image height and infinite scroll)
- layout overall needs to be **responsive** and look consistent across devices
- back to top button
- nav bar with gallery sections curated by content type (each gallery is its own feed)
- title color #00b8e6
- highlight hover color B #ff3377
- background color #33334d

## To-Do

- [x] Implement menu
- [x] Test adding more images
- [x] Implemented Masonry
- [x] Separate galleries by content and theme
- [x] Split image links and script files
- [ ] Documentation and How To customise from template
- [ ] Share this as a template for friends if it doesn't look terrible
- [ ] Build 'contact' and 'about' pages
- [ ] Add MIT license thingy or whatever appropriate
- [ ] Fix layout on mobile devices (responsive)

