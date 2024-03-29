function CourseNavigationSettings() {
  return `
    <html>
        <body>
            <table cellpadding="5">
            <thead>
                <tr>
                <th>
                    <a href="../CourseDetails/screen.html">Course Details</a>
                </th>
                <th>
                    <a href="#">Sections</a>
                </th>
                <th>
                    <a href="#">Navigation</a>
                </th>
                <th>
                    <a href="#">Apps</a>
                </th>
                <th>
                    <a href="#">Feature Options</a>
                </th>
                <th>
                    <a href="#">Integrations</a>
                </th>
                </tr>
            </thead>
            </table>
            <br />
            <p>Drag and drop items to reorder them in the course navigation</p>
            <table
            border="1"
            cellpadding="5"
            cellspacing="0"
            width="50%"
            border-collapse="collapse"
            >
            <tbody>
                <tr>
                <td>Home</td>
                </tr>
                <tr>
                <td>Modules</td>
                </tr>
                <tr>
                <td>Piazza</td>
                </tr>
                <tr>
                <td>Zoom Meetings</td>
                </tr>
                <tr>
                <td>Assignments</td>
                </tr>
                <tr>
                <td>Quizzes</td>
                </tr>
                <tr>
                <td>Grades</td>
                </tr>
                <tr>
                <td>People</td>
                </tr>
                <tr>
                <td>Panopto Video</td>
                </tr>
            </tbody>
            </table>
            <br /><br />
            <span>Drag items here to hide them from students.</span><br />
            <span
            >Disabling most pages will cause students who visit those <br />
            pages to be redirected to the course home page.</span
            ><br /><br />
            <table
            border="1"
            cellpadding="5"
            cellspacing="0"
            width="50%"
            border-collapse="collapse"
            >
            <tbody>
                <tr>
                <td>
                    Chat <br />
                    <i>Page diabled, won't appear in navigation</i>
                </td>
                </tr>
                <tr>
                <td>
                    SCORM <br />
                    <i>Page diabled, won't appear in navigation</i>
                </td>
                </tr>
                <tr>
                <td>
                    Attendance <br />
                    <i>Page diabled, won't appear in navigation</i>
                </td>
                </tr>
                <tr>
                <td>
                    Barnes and Noble Bookstore <br />
                    <i>Page diabled, won't appear in navigation</i>
                </td>
                </tr>
                <tr>
                <td>
                    Digication <br />
                    <i>Page diabled, won't appear in navigation</i>
                </td>
                </tr>
                <tr>
                <td>
                    Top Hat <br />
                    <i>Page diabled, won't appear in navigation</i>
                </td>
                </tr>
                <tr>
                <td>
                    Syllabus <br />
                    <i>Page diabled, will redirect to home page</i>
                </td>
                </tr>
                <tr>
                <td>
                    Perusall <br />
                    <i>Page diabled, won't appear in navigation</i>
                </td>
                </tr>
                <tr>
                <td>
                    Microsoft Teams Meetings <br />
                    <i>Page diabled, won't appear in navigation</i>
                </td>
                </tr>
                <tr>
                <td>
                    FACT Reporting and Photo Roster <br />
                    <i>Page diabled, won't appear in navigation</i>
                </td>
                </tr>
                <tr>
                <td>
                    Progress Reports (Navigate) <br />
                    <i>Page diabled, won't appear in navigation</i>
                </td>
                </tr>
                <tr>
                <td>
                    Microsoft Teams for Canvas <br />
                    <i>Page diabled, won't appear in navigation</i>
                </td>
                </tr>
                <tr>
                <td>
                    VHL Central <br />
                    <i>Page diabled, won't appear in navigation</i>
                </td>
                </tr>
                <tr>
                <td>
                    Gradescope 1.3 <br />
                    <i>Page diabled, won't appear in navigation</i>
                </td>
                </tr>
                <tr>
                <td>
                    Credentials <br />
                    <i>Page diabled, won't appear in navigation</i>
                </td>
                </tr>
                <tr>
                <td>
                    iClicker <br />
                    <i>Page diabled, won't appear in navigation</i>
                </td>
                </tr>
            </tbody>
            </table><br />
            <button type="button">Save</button>
        </body>
    </html>
    `;
}
