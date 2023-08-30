# art-folio

To fetch all folder file names into a neat .txt in the current directory:
```bash
dir /B > filelist.txt
```

# Local testing for idiots:

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

6. **Testing Site Locally on a Simulated Mobile Device**

- Open site in **Google Chrome**.
- Right-click and select `Inspect` or use `Ctrl + Shift + I` (`Cmd + Option + I` on Mac).
- Click the device icon at the top-left of the Developer Tools or use `Ctrl + Shift + M` (`Cmd + Option + M` on Mac).
- Choose a mobile device from the dropdown (e.g., iPhone X, Galaxy S5).
- Refresh the page for proper device simulation.
- (Optional) Use the rotate icon for landscape/portrait view.
- Interact with your site in the simulated environment.

> Note: While this tool is valuable for quick checks, always test on actual mobile devices for full compatibility.


This setup provides a zero-configuration tool for local development. You can see live changes by refreshing the browser after editing your files.

## Features

- [grid](http://miromannino.github.io/Justified-Gallery/) layout for pictures
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

- [x] Implement Nav Bar
- [ ] Implement back to top
- [x] Restyle the CSS with appropriate accent colors
- [ ] Adjust Justified Gallery settings to make larger images.
- [ ] Populate gallery content.
- [ ] Test gallery sections.
- [ ] Documentation and How To customise from template
- [ ] Share this as a template for friends if it doesn't look terrible
- [ ] Build 'contact' and 'about' pages
- [ ] Add MIT license thingy or whatever appropriate
- [x] Responsive Layout

