# Quick Layout

**A layout builder for developers with deadlines**.

![Screenshot of the site](https://github.com/MaxPerdomo/quick-layout/blob/main/images-for-readme/sc.png?raw=true)

- [Visit deployed website](https://quick-layout.vercel.app/)

## What is this project?

It's a site that enables developers to build layouts by simply dragging and dropping
items in a way that represents the layout they want for their site.

HTML and CSS code is generated from the layout the developers assembled, and then the
developers can use that code as their starter template for any website they'd like
to build.

## Built with

- **Software**:
  - [React](https://reactjs.org/)
  - [Create React App](https://create-react-app.dev/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Redux](http://redux.js.org)
  - [Styled components](https://styled-components.com)
  - [React Router](https://reacttraining.com/react-router/)
- **Testing and debugging**:
  - [Firefox DevTools](https://developer.mozilla.org/en-US/docs/Tools)
  - [Windows 10 Virtual Machine](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/)
    for Microsoft Edge and
    [Microsoft Narrator](https://en.wikipedia.org/wiki/Microsoft_Narrator)
    (screen reader) testing.

## Accessibility

- **Keyboard navigation** (ie, `<Tab>`, `<Enter>`, `<Esc>`) works predictably.
- **Screen readers** work predictably and don't get confused by menus or
  modals.

## What did you learn from doing this project?

- __Design and plan before I build__. I was used to jumping in to writing code as soon
  as a cool project idea came up to me, and then I'd refactor a billion times afterwards
  due to changing my mind regarding functionality or web design.
    - However since for this project I had no idea how I could even _start_ building it,
    I broke down the project's functionality into very small tasks that I could tackle
    separately, and created wireframes to visualize how these tasks would look like to
    an end user.
      - Only after I was 100% sure I liked the user interface's design and determined
      the project's scope, I began building the project. This turned out to be a much
      smoother approach to building sites for me (I have yet to change my mind on
      functionality or design, which is rare!).
  - In the future I will plan my projects before I build them.

- __I probably won't use styled components again in the future__. Comparing styled
components with other approaches to CSS that I have tried in the past, I personally prefer
utility-first CSS frameworks (like [Tachyons](http://tachyons.io)) since they allow me to:
  - __Build sites much faster__
  - __Keep the size of the CSS stylesheets small__ (especially with frameworks
  like [Tailwind](https://tailwindcss.com/) that tree-shake unused CSS).
  - __Reuse styles__. As much as I tried to reuse CSS with styled components
  (creating style variables like `Paragraph`, `Button`, and `Heading`), I find
  utility-first CSS frameworks to be _much_ more reusable out of the box and
  without any extra hassle.

- __I became more comfortable writing React class components__ and understand
the lifecycle of React components better.

## What would you do if you had more time?

- __Refactor the codebase to use only function components and hooks__, instead of a mix
  of function components and class components.
    - __My reasoning for using class components__ was the following:
        - This is a portfolio project. Once I started working for a company, I thought
        that it would be highly likely that they'd have some legacy code written in
        class components, and that by using class components in one of my projects
        I would be demonstrating that I'm comfortable with class components (lifecycle
        methods like `componentDidMount`, the `render` function, etc).
        However, while having that knowledge _is_ beneficial, function components and
        hooks are arguably _much_ more readable and easier to reason about, so I want
        to refactor the codebase in the future to adhere to modern React code style.

- __Add tests__. To ensure the major refactoring mentioned previously does not break
existing functionality, I want the codebase to have a high test coverage before I begin
refactoring it.

- __Add more explanatory comments__.

## License

This site is licensed under the [Mozilla Public License 2.0](LICENSE).
