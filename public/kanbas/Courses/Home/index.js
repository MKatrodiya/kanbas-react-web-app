function CourseContent() {
  return `
    <!DOCTYPE html>
    <html>
    <head></head>
    <body>
        <table width="100%">
        <tbody>
            <tr valign="top">
            <!-- Left side column -->
            <td>
                <!-- Buttons on top -->
                <button type="button">Collapse All</button>
                <button type="button">View Progress</button>
                <select name="publish" id="publish">
                <option value="publish" selected>Publish All</option>
                <option value="unpublish">Unpublish All</option>
                <option value="draft">Draft All</option>
                </select>
                <button type="button">Module</button>
                <br />
                <!-- Course content -->
                <ul>
                <li>
                    Week 0 - INTRO
                    <ul>
                    <li>
                        LEARNING OBJECTIVES
                        <ul>
                        <li>Introduction to the course</li>
                        <li>Learn what is Web Development</li>
                        <li>Creating a development environment</li>
                        <li>Creating a Web Application</li>
                        <li>Getting started with the 1st assignment</li>
                        </ul>
                    </li>
                    <li>
                        READING
                        <ul>
                        <li>Full Stack Developer - Chapter 1 - Introduction</li>
                        <li>
                            Full Stack Developer - Chapter 2 - Creating User
                            Interfaces With HTML
                        </li>
                        </ul>
                    </li>
                    <li>
                        SLIDES
                        <ul>
                        <li>
                            <a
                            href="https://developer.mozilla.org/en-US/docs/Learn"
                            target="_blank"
                            >Introduction to Web Development Links to an external
                            site</a
                            >
                        </li>
                        <li>
                            <a
                            href="https://nodejs.org/en/learn/getting-started/introduction-to-nodejs"
                            target="_blank"
                            >Creating an HTTP server with Node.js Links to an
                            external site</a
                            >
                        </li>
                        <li>
                            <a
                            href="https://react.dev/learn/start-a-new-react-project"
                            target="_blank"
                            >Creating a React Application Links to an external
                            site</a
                            >
                        </li>
                        </ul>
                    </li>
                    </ul>
                </li>
                </ul>
                <ul>
                <li>
                    Week 1 - HTML
                    <ul>
                    <li>
                        LEARNING OBJECTIVES
                        <ul>
                        <li>Learn how to create user interfaces with HTML</li>
                        <li>Keep working on assignment 1</li>
                        <li>Deploy the assignment to Netlify</li>
                        </ul>
                    </li>
                    <li>
                        READING
                        <ul>
                        <li>Full Stack Developer - Chapter 1 - Introduction</li>
                        <li>
                            Full Stack Developer - Chapter 2 - Creating User
                            Interfaces With HTML
                        </li>
                        </ul>
                    </li>
                    <li>
                        SLIDES
                        <ul>
                        <li>
                            <a
                            href="https://developer.mozilla.org/en-US/docs/Learn"
                            target="_blank"
                            >Introduction to Web Development Links to an external
                            site</a
                            >
                        </li>
                        <li>
                            <a
                            href="https://nodejs.org/en/learn/getting-started/introduction-to-nodejs"
                            target="_blank"
                            >Creating an HTTP server with Node.js Links to an
                            external site</a
                            >
                        </li>
                        <li>
                            <a
                            href="https://react.dev/learn/start-a-new-react-project"
                            target="_blank"
                            >Creating a React Application Links to an external
                            site</a
                            >
                        </li>
                        </ul>
                    </li>
                    </ul>
                </li>
                </ul>
            </td>
            <!-- Right side column -->
            <td>
                <h2>Course Status</h2>
                <button type="button">Unpublish</button>
                <button type="button">Published</button>
                <ul>
                <li><a href="">Import Existing Content</a></li>
                <li><a href="">Import From Commons</a></li>
                <li><a href="">Choose Home Page</a></li>
                <li><a href="">View Course stream</a></li>
                <li><a href="">New Announcement</a></li>
                <li><a href="">New Analytics</a></li>
                <li><a href="">View Course Notifications</a></li>
                </ul>
                <h2>Coming Up</h2>
                <a href="">View Calendar</a>
                <ul>
                <li>
                    <a href="">Lecture CS5610.12345.202407 Jan 11 at 9:41am</a>
                </li>
                <li>
                    <a href="">Lecture CS5610.12345.202407 Jan 18 at 2:01pm</a>
                </li>
                <li>
                    <a href="">Lecture CS5610.12345.202402 Jan 20 at 10:01pm</a>
                </li>
                </ul>
            </td>
            </tr>
        </tbody>
        </table>
    </body>
    </html>
    `;
}
