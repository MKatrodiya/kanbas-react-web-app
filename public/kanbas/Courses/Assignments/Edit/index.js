function EditAssignment() {
  return `
    <html>
    <body>
        <select>
        <option value="SpeedGrader">SpeedGrader</option>
        </select>
        <hr />
        <h2>Assignment Name</h2>
        <form id="assignment-edit">
        <input
            type="text"
            id="assignment-name"
            placeholder="Assignment Name"
            value="A1 - ENV + HTML"
        />
        <br />
        <br />
        <textarea
            id="assignment-description"
            rows="3"
            cols="30"
            placeholder="Assignment Description"
        >
    This is the assignment description...lorem ipsum</textarea
        >
        <br />
        <br />
        <label for="wd-assignments-points">Points</label><br />
        <input
            type="number"
            id="wd-assignments-points"
            placeholder="Points"
            value="100"
            min="0"
            max="1000"
        />
        <br />
        <br />
        <label for="wd-assignment-group">Assignment Group</label><br />
        <select id="wd-assignment-group">
            <option value="1" selected>Assignments</option>
            <option value="2">Project</option>
            <option value="3">Quizzes</option>
        </select>
        <br />
        <br />
        <label for="wd-display-grade-as">Display Grade As</label><br />
        <select id="wd-display-grade-as">
            <option value="1">Points</option>
            <option value="2" selected>Percentage</option>
            <option value="3">Complete/Incomplete</option>
        </select>
        <br />
        <br />
        <label for="wd-submission-type">Submission Type</label><br />
        <select id="wd-submission-type">
            <option value="1" selected>Online</option>
            <option value="2">On Paper</option>
            <option value="3">No Submission</option>
        </select>
        <br />
        <br />
        <label>Online Entry Options</label><br />
        <input type="checkbox" name="wd-entry-options" id="wd-text-entry" />
        <label for="wd-text-entry">Text Entry</label><br />
        <input type="checkbox" name="wd-entry-options" id="wd-website-url" />
        <label for="wd-website-url">Website URL</label><br />
        <input type="checkbox" name="wd-entry-options" id="wd-media-recording" />
        <label for="wd-media-recording">Media Recording</label><br />
        <input
            type="checkbox"
            name="wd-entry-options"
            id="wd-student-annotation"
        />
        <label for="wd-student-annotation">Student Annotation</label><br />
        <input type="checkbox" name="wd-entry-options" id="wd-file-upload" />
        <label for="wd-file-upload">File Upload</label><br />
        <br /><br />
        <label>Peer Reviews</label><br />
        <input type="radio" name="wd-peer-reviews" id="wd-no-peer-reviews" />
        <label for="wd-no-peer-reviews">No Peer Reviews</label><br />
        <input type="radio" name="wd-peer-reviews" id="wd-peer-reviews" />
        <label for="wd-peer-reviews">Peer Reviews</label><br />
        <input type="radio" name="wd-peer-reviews" id="wd-peer-reviews-2" />
        <label for="wd-peer-reviews-2">Peer Reviews</label><br /><br />
        <label>Assign</label><br />
        <label for="wd-assign-to">Assign To</label><br />
        <input
            type="text"
            id="wd-assign-to"
            placeholder="Assign To"
            value="Everyone"
        /><br /><br />
        <label for="wd-due-date">Due Date</label><br />
        <input type="date" id="wd-due-date" value="2024-01-22" /><br /><br />
        <label for="wd-available-from">Available From</label><br />
        <input
            type="date"
            id="wd-available-from"
            value="2024-01-22"
        /><br /><br />
        <label for="wd-until">Until</label><br />
        <input type="date" id="wd-until" value="2024-01-29" /><br /><br />
        <a href="/Kanbas/Courses/Assignments/screen.html">
            <button type="button" id="wd-cancel">Cancel</button>
        </a>
        <a href="/Kanbas/Courses/Assignments/screen.html">
            <button type="button" id="wd-save">Save</button>
        </a>
        </form>
    </body>
    </html>
    `;
}
