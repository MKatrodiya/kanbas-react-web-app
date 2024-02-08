function KanbasNavigation() {
  return `
   <!DOCTYPE html>
  <html>
    <head>
      <title>Navigation</title>
      <link rel="stylesheet" href="/Kanbas/styles.css" />
      <link rel="stylesheet" href="/Kanbas/Navigation/index.css" />
      <link
        href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.1/css/all.css"
        rel="stylesheet"
      />
    </head>
    <body>
      <ul class="wd-kanbas-navigation">
        <li>
          <a href="http://northeastern.edu"
            ><img
              src="/images/Northeastern_logo.png"
              width="40px"
              alt="Northeastern University Logo"
          /></a>
        </li>
        <li class="wd-navigation-account">
          <a href="/Kanbas/Account/Profile/screen.html">
            <i class="fa fa-regular fa-user"></i>Account</a
          >
        </li>
        <li class="wd-active">
          <a href="/Kanbas/Dashboard/screen.html">
            <i class="fa fa-gauge"></i>Dashboard</a
          >
        </li>
        <li>
          <a href="/Kanbas/Courses/Home/screen.html"
            ><i class="fa fa-book"></i>Courses</a
          >
        </li>
        <li>
          <a href="#"><i class="fa fa-regular fa-calendar"></i>Calendar</a>
        </li>
        <li>
          <a href="#"><i class="fa fa-inbox"></i>Inbox</a>
        </li>
        <li>
          <a href="#"><i class="fa fa-clock"></i>History</a>
        </li>
        <li>
          <a href="#"><i class="fa fa-camera"></i>Studio</a>
        </li>
        <li>
          <a href="#"><i class="fa fa-arrow-right-to-bracket"></i>Commons</a>
        </li>
        <li>
          <a href="#"><i class="fa fa-question"></i>Help</a>
        </li>
      </ul>
    </body>
  </html>
  `;
}
