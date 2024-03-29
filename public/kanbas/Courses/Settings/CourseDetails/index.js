function CourseDetails() {
  return `
    <html>
    <head> </head>
    <body>
        <table cellpadding="5">
        <thead>
            <tr>
            <th>
                <a href="#">Course Details</a>
            </th>
            <th>
                <a href="#">Sections</a>
            </th>
            <th>
                <a href="../Navigation/screen.html">Navigation</a>
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
        <h1>Course Details</h1>
        <table>
        <tbody>
            <tr valign="top">
            <td>
                <label for="wd-image">Image:</label>
            </td>
            <td>
                <input type="file" id="wd-image" name="wd-image" />
            </td>
            </tr>
            <tr valign="top">
            <td>Name:</td>
            <td>CS5610 12244 - Web Development SEC 07 Spring 2024 [BOST-1-R]</td>
            </tr>
            <tr valign="top">
            <td>Course Code:</td>
            <td>CS5610.12244.202407</td>
            </tr>
            <tr valign="top">
            <td>Blueprint Course:</td>
            <td>No</td>
            </tr>
            <tr valign="top">
            <td>Course Template:</td>
            <td>
                <input
                type="checkbox"
                id="wd-course-template"
                name="wd-course-template"
                />
                <label for="wd-course-template"
                >Enable course as a Course Template</label
                >
            </td>
            </tr>
            <tr valign="top">
            <td>
                <label for="wd-time-zone">Time Zone:</label>
            </td>
            <td>
                <select id="wd-time-zone" name="wd-time-zone">
                <option value="Eastern Time (US & Canada)">
                    Eastern Time (US & Canada)
                </option>
                <option value="Central Time (US & Canada)">
                    Central Time (US & Canada)
                </option>
                <option value="Mountain Time (US & Canada)">
                    Mountain Time (US & Canada)
                </option>
                <option value="Pacific Time (US & Canada)">
                    Pacific Time (US & Canada)
                </option>
                </select>
            </td>
            </tr>
            <tr valign="top">
            <td>SIS ID:</td>
            <td>CS5610.12244.202407</td>
            </tr>
            <tr valign="top">
            <td>Subaccount:</td>
            <td>
                <a href="#">CS Grad</a>
            </td>
            </tr>
            <tr valign="top">
            <td>Term:</td>
            <td>Spring 2024 Full Term</td>
            </tr>
            <tr valign="top">
            <td>Participation:</td>
            <td>
                <select>
                <option value="Term" selected>Term</option>
                </select>
                Course participation is limited to <b>term</b> start and end
                dates.<br />
                <b>Start</b><br />
                <input type="date" /><br />
                <b>End</b><br />
                <input type="date" /><br />
                <input type="checkbox" id="wd-restrict-before" />
                <label for="wd-restrict-before"
                >Restrict students from viewing course before term start
                date</label
                ><br />
                <input type="checkbox" id="wd-restrict-after" />
                <label for="wd-restrict-after"
                >Restrict students from viewing course after term end date</label
                >
            </td>
            </tr>
            <tr valign="top">
            <td>Default due time:</td>
            <td>
                <select>
                <option value="default" selected>
                    Account default (11:59 PM)
                </option></select
                ><br />
                This influence the user interface for setting due dates. It does not
                change the time due for any existing assignments.
            </td>
            </tr>
            <tr valign="top">
            <td>Language:</td>
            <td>
                <select>
                <option value="notset" selected>
                    Not set (user-configurable, default to English)
                </option></select
                ><br />
                This will set the language for the course. It will not affect the
                language of the user interface for students.
            </td>
            </tr>
            <tr valign="top">
            <td>File Storage:</td>
            <td>100000 megabutes</td>
            </tr>
            <tr valign="top">
            <td>Large Course:</td>
            <td>
                <input
                type="checkbox"
                id="wd-large-course"
                name="wd-large-course"
                />
                <label for="wd-large-course"
                >Launch SppedGrader Filtered by Student Group</label
                >
            </td>
            </tr>
            <tr valign="top">
            <td>Grading Scheme:</td>
            <td>
                <input
                type="checkbox"
                id="wd-grading-scheme"
                name="wd-grading-scheme"
                />
                <label for="wd-grading-scheme">Enable course grading scheme</label>
            </td>
            </tr>
            <tr valign="top">
            <td>License:</td>
            <td>
                <select>
                <option value="private" selected>Private (Copyrighted)</option>
                </select>
            </td>
            </tr>
            <tr valign="top">
            <td>File Copyright:</td>
            <td>
                <input type="checkbox" id="wd-file-copyright" />
                <label for="wd-file-copyright">
                Copyright and license information must be provided for files
                before they are published.
                </label>
            </td>
            </tr>
            <tr valign="top">
            <td>Visibility:</td>
            <td>
                If you need to make your course public please contact your
                administrator/support.<br />
                <select disabled>
                <option value="public" selected>Public</option></select
                ><br />
                <input type="checkbox" id="wd-include-in-public-index" />
                <label for="wd-include-in-public-index"
                >Include this course in public course index</label
                >
            </td>
            </tr>
            <tr valign="top">
            <td>Format:</td>
            <td>
                <select>
                <option value="oncampus" selected>On-Campus</option>
                </select>
            </td>
            </tr>
            <tr valign="top">
            <td>Mystery Paths:</td>
            <td>
                <input type="checkbox" id="wd-mystery-paths" />
                <label for="wd-mystery-paths"
                >Enable individual learning paths for students based on
                assessment</label
                >
            </td>
            </tr>
            <tr valign="top">
            <td>Description</td>
            <td>
                <textarea cols="40" rows="5"></textarea><br />
                <a href="#">more options</a>
            </td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
            <td>
                <button type="button">Update Course Details</button>
            </td>
            </tr>
        </tfoot>
        </table>
    </body>
    </html>
    `;
}
