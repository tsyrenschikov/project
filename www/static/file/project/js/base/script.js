// Dummy data placeholder. Replace with array of actual data objects
const data = [
{
  project: "Project Поздеева Дарья",
  stack: ["python", "django", "html", "css", "jquery"],
  description:
  "Проект ученика 10 класса 2 школы г. Красноуфимск. Изучение Фраймворка",
  website: "#",
  github: "#",
  needs: "Тема в разработке",
  status: "Тема в разработке" },

{
  project: "Project Евдокимов Владимир",
  stack: ["python", "django", "html", "css", "jquery"],
  description:
  "Проект ученика 10 класса 9 школы г. Красноуфимск. Изучение Фраймворка",
  website: "#",
  github: "#",
  needs: "Тема в разработке",
  status: "Тема в разработке" },

{
  project: "Project X",
  stack: ["react", "express", "node"],
  description:
  "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
  website: "https://www.google.com",
  github: "https://www.github.com",
  needs: "People with super powers",
  status: "In Development" },

{
  project: "Project XYZ",
  stack: ["python", "django"],
  description:
  "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
  website: "https://www.google.com",
  github: "https://www.github.com",
  needs: "People with super powers, semi-super powers, or no powers at all",
  status: "Live" },

{
  project: "Project X",
  stack: ["react", "express", "node"],
  description:
  "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
  website: "https://www.google.com",
  github: "https://www.github.com",
  needs: "People with super powers",
  status: "In Development" },

{
  project: "Project XYZ",
  stack: ["python", "django"],
  description:
  "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
  website: "https://www.google.com",
  github: "https://www.github.com",
  needs: "People with super powers, semi-super powers, or no powers at all",
  status: "Live" }];



const Layout = ({ children }) => {
  return /*#__PURE__*/React.createElement("div", { className: "row" }, children);
};

const Card = ({
  data: { status, description, needs, project, image, stack, website, github } }) =>
{
  const style = {
    img: {
      maxWidth: "400px" } };


  return /*#__PURE__*/(
    React.createElement("div", { className: "col m4" }, /*#__PURE__*/
    React.createElement("div", { className: "card hoverable" }, /*#__PURE__*/
    React.createElement("div", { className: "card-image waves-effect waves-block waves-light" }, /*#__PURE__*/
    React.createElement("img", { style: style.img, className: "activator", src: image })), /*#__PURE__*/

    React.createElement("div", { className: "card-content" }, /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/
    React.createElement(StackIcons, { data: stack })), /*#__PURE__*/

    React.createElement("span", { className: "card-title activator grey-text text-darken-4" },
    project, /*#__PURE__*/
    React.createElement("i", { className: "material-icons right" }, "more_vert")), /*#__PURE__*/

    React.createElement("div", null, /*#__PURE__*/
    React.createElement("span", null, /*#__PURE__*/
    React.createElement("a", { href: website }, "Website")), /*#__PURE__*/

    React.createElement("span", null, /*#__PURE__*/
    React.createElement("a", { className: "github", href: github }, "Github")))), /*#__PURE__*/





    React.createElement("div", { className: "card-reveal" }, /*#__PURE__*/
    React.createElement("span", { className: "card-title grey-text text-darken-4" },
    project, /*#__PURE__*/
    React.createElement("i", { className: "material-icons right" }, "close")), /*#__PURE__*/

    React.createElement("div", null, /*#__PURE__*/
    React.createElement("span", { className: "status" }, status)), /*#__PURE__*/

    React.createElement("p", null, description), /*#__PURE__*/
    React.createElement("p", null, /*#__PURE__*/
    React.createElement("strong", null, "Need:")), /*#__PURE__*/

    React.createElement("p", null, needs)))));




};

// Note: Empty span tag on line 140 is there as placeholder for
// the custom CSS to inject text based on stack item.
const StackIcons = ({ data }) => {
  const icons = data.map(item => {
    return /*#__PURE__*/(
      React.createElement("div", { key: item, className: "icon" }, /*#__PURE__*/
      React.createElement("span", { className: item }, /*#__PURE__*/
      React.createElement("span", null))));



  });
  return /*#__PURE__*/React.createElement("div", null, " ", icons, " ");
};

const Projects = ({ data }) => {
  const projects = [];
  data.forEach((item, idx) => {
    projects.push( /*#__PURE__*/React.createElement(Card, { key: idx, data: item }));
  });
  return /*#__PURE__*/React.createElement("div", null, projects);
};

const App = () => /*#__PURE__*/
React.createElement(Layout, null, /*#__PURE__*/
React.createElement(Projects, { data: data }));



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(App, null));