function EditProfile() {
  return `
    <html>
    <body>
        <h1>Meet Katrodiya</h1>
        <form method="POST">
        <label for="wd-name">Name: *</label>
        <input type="text" id="wd-name" name="wd-name" value="Meet Katrodiya" />
        <label for="wd-pronouns">Pronouns:</label>
        <select id="wd-pronouns" name="wd-pronouns">
            <option value="none">None</option>
            <option value="he/him">he/him</option>
            <option value="she/her">she/her</option>
            <option value="other">other</option></select
        ><br /><br />
        <label for="wd-title">Title:</label>
        <input type="text" id="wd-title" name="wd-title" /> <br />
        <h3>Contact</h3>
        <span
            >No registered services, you can add some on the
            <a href="#">settings</a>
            page.</span
        ><br />
        <h3>Biography</h3>
        <textarea id="wd-bio" name="wd-bio" rows="4" cols="50">
    Student, Software Engineer, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </textarea>
        <br />
        <h3>Links</h3>
        <ul>
            <li>
            <a href="https://www.youtube.com"
                >Youtube &nbsp; &nbsp; Links to an external site.</a
            >
            </li>
        </ul>
        <table>
            <thead>
            <tr>
                <th>Title</th>
                <th>URL</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                <input type="text" name="wd-link-title" value="YouTube" />
                </td>
                <td>
                <input
                    type="text"
                    name="wd-link-url"
                    value="https://www.youtube.com"
                />
                </td>
                <td>
                <a href="#">Remove</a>
                </td>
            </tr>
            </tbody>
        </table>
        <button type="button">Add another link</button><br />
        <a href="/Kanbas/Account/Profile/screen.html"
            ><button type="button">Cancel</button></a
        >
        <a href="/Kanbas/Account/Profile/screen.html"
            ><button type="button">Save Profile</button></a
        ><br />
        <a href="#"><button type="button">Edit Profile</button></a>
        <a href="/Kanbas/Account/Profile/screen.html"
            ><button type="button">Cancel Editing</button></a
        >
        </form>
    </body>
    </html>
    `;
}
