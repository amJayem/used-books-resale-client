import React from "react";
import { Link } from 'react-router-dom';

const Blogs = () => {
  return (
    <div className="grid grid-cols-1 justify-items-center my-5">
        <h1 className="text-4xl my-5 font-semibold">Web Blog</h1>
        <div>
        <div className="my-5 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-60 md:w-96">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Different ways to manage a state in a React application
          </div>
          <div className="collapse-content">
            <p>
              <strong>
                There are four main types of state you need to properly manage
                in your React apps:
              </strong>
            </p>
            <li>Local state</li>
            <li>Global state</li>
            <li>Server state</li>
            <li>URL state</li>
            <p className="mt-2">
              Local (UI) state – Local state is data we manage in one or another
              component. Local state is most often managed in React using the
              useState hook. For example, local state would be needed to show or
              hide a modal component or to track values for a form component,
              such as form submission, when the form is disabled and the values
              of a form’s inputs.
            </p>
            <p className="mt-2">
              Global (UI) state – Global state is data we manage across multiple
              components. Global state is necessary when we want to get and
              update data anywhere in our app, or in multiple components at
              least. A common example of global state is authenticated user
              state. If a user is logged into our app, it is necessary to get
              and change their data throughout our application. Sometimes state
              we think should be local might become global.
            </p>
            <p className="mt-2">
              Server state – Data that comes from an external server that must
              be integrated with our UI state. Server state is a simple concept,
              but can be hard to manage alongside all of our local and global UI
              state. There are several pieces of state that must be managed
              every time you fetch or update data from an external server,
              including loading and error state. Fortunately there are tools
              such as SWR and React Query that make managing server state much
              easier.
            </p>
            <p className="mt-2">
              URL state – Data that exists on our URLs, including the pathname
              and query parameters. URL state is often missing as a category of
              state, but it is an important one. In many cases, a lot of major
              parts of our application rely upon accessing URL state. Try to
              imagine building a blog without being able to fetch a post based
              off of its slug or id that is located in the URL! There are
              undoubtedly more pieces of state that we could identify, but these
              are the major categories worth focusing on for most applications
              you build.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow my-5 border border-base-300 bg-base-100 rounded-box w-60 md:w-96">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            How does prototypical inheritance work?
          </div>
          <div className="collapse-content">
            <p>
              The Prototypal Inheritance is a feature in javascript used to add
              methods and properties in objects. It is a method by which an
              object can inherit the properties and methods of another object.
              Traditionally, in order to get and set the [[Prototype]] of an
              object, we use Object. getPrototypeOf and Object.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow my-5 border border-base-300 bg-base-100 rounded-box w-60 md:w-96">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            What is a unit test? Why should we write unit tests?
          </div>
          <div className="collapse-content">
            <p className="my-3">
              The main objective of unit testing is to isolate written code to
              test and determine if it works as intended. Unit testing is an
              important step in the development process, because if done
              correctly, it can help detect early flaws in code which may be
              more difficult to find in later testing stages.
            </p>
            <p>
              Well-written unit tests act as documentation for your code. Any
              developer can quickly look at your tests and know the purpose of
              your functions. It simplifies the debugging process. Unit testing
              is an integral part of extreme programming.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow my-5 border border-base-300 bg-base-100 rounded-box w-60 md:w-96">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            React vs. Angular vs. Vue?
          </div>
          <div className="collapse-content">
            <p>
              <strong>Angular</strong>
            </p>
            <p className="mt-3">
              The AngularJS framework was first released by Google in 2010. In
              2016, Angular 2 appeared, which was a complete rewrite of Angular
              JS. Since then, new versions have appeared frequently. Angular 7
              is currently the latest version available.
            </p>
            <p className="mt-3">
              <strong>Advantages of Angular framework</strong>
            </p>
            <p className="mt-3">
              <li>
                MVC framework: Angular is a MVW (Model-View-Whatever) framework,
                traditionally used as an MVC (Model-View-Controller). Due to
                this, the application is divided into three interconnected
                components. This enables Angular JS developers to write
                well-structured code, which is beneficial for complex projects.
              </li>
              <li>
                Angular templates: The templates for component creation are
                readable because they mostly use standard HTML tags.
              </li>
              <li>
                Simple implementation of two-way data binding: Two-way data
                binding means that any changes to the model affect the view.
                Vice versa when the view changes, model immediately changes as
                well. Angular allows simple two-way data binding, which is
                beneficial for simple applications. More complex apps work more
                quickly with one-way data binding, which works only in one
                direction (view-to-model or model-to-view), depending on the
                needs of the software. This allows resources to be saved.
              </li>
              <li>
                Big community: Angular has a big community that has been
                developing since the release of AngularJS and has grown stronger
                since Angular 2 was released. The framework has close to 500.000
                weekly downloads on npm and over 45 thousand stars on Github.
                This popularity means that there are a number of solutions that
                are compatible with different versions of Angular, as well as
                the ability to receive advice from experienced developers and
                users without needing to contact official support.
              </li>
            </p>
            <p className="mt-3" hidden>
              <strong>Disadvantages of Angular</strong>
            </p>
            <p className="mt-3" hidden>
              <li>
                Doesn’t use shadow DOM as a default: Shadow DOM addresses the
                issue of unique names for page elements or IDs, which can give
                developers serious problems, especially when it comes to complex
                projects. A developer can change the CSS style of one file, and
                other files will also be affected by the same change. Shadow DOM
                allows the browsers to include a subtree of DOM elements into
                document rendering, but not into the main DOM document. Shadow
                DOM encapsulates the styles, scripts, and content inside a
                custom element so that they don’t interfere with other content
                in the app. In the case of Angular 2+, shadow DOM is enabled in
                browsers that support it natively. Otherwise, shadow DOM
                encapsulation is emulated.
              </li>
              <li>
                Doesn’t use virtual DOM at all : A virtual DOM is a simplified
                copy of the DOM. Virtual DOM allows any element to be changed
                quickly without needing to render the whole DOM. This approach
                is a trend among modern web development frameworks, but,
                unfortunately, it isn’t yet supported by any Angular version.
                Instead, Angular 2 uses unidirectional data flow to detect
                changes to the model and updates only the parts of the DOM that
                are affected by changes to the model.
              </li>
              <li>
                TypeScript usage: Being a JS framework, Angular supports the use
                of pure JavaScript. However, this framework was created for use
                with TypeScript, a superset of JavaScript created by Microsoft.
                TypeScript allows the true power of Angular to be released.
                There is one disadvantage - you will have to spend some time
                learning the modified syntax.
              </li>
              <li>
                Lower render speed: The limited usage of shadow DOM and lack of
                virtual DOM results in lower performance. The view
                render/re-render speed is slower compared to the performance of
                other JavaScript frameworks on our chart.
              </li>
              <li>
                Heavyweight code: Angular is a monolithic framework with
                heavyweight code that needs to be downloaded from the server
                before you see the web app in your browser. As a result, the
                speed and performance decrease. Fortunately, these problems can
                be solved with tree-shaking, a technique that allows unused code
                in an app to be eliminated. Webpack is a perfect environment for
                tree-shaking. This is how it works: Webpack scans the code, puts
                all the modules in a single file, and removes all the “export”
                from code that isn’t being imported. Then, you have to run a
                minification process. As a result, the bundle gets rid of the
                unused code.
              </li>
            </p>
            <p className="mt-3"><strong>React</strong></p>
            <p className="mt-3">React is actually a JavaScript library created to build user interfaces. It is supported by Facebook and Instagram and has become a core technology for the endless feed in these two applications. As a JS library, React has a limited sphere of usage, but when bundled with other libraries it becomes a powerful solution, making it a main competitor of Angular.</p>
            <p className="mt-3"><strong>Advantages of React</strong></p>
            <p className="mt-3">
                <li>React doesn’t use any templates. The component logic is written in JavaScript, giving it more flexibility and enabling large amounts of data to easily pass through your app, while maintaining the state of the DOM. Although this approach is used in every compared frontend frameworks, React was the first one to introduce a component model.</li>
                <li>As explained, a virtual DOM enables a simplified copy of the DOM to be created. All changes that need to be implemented are made in the virtual DOM. Later, the two DOMs are compared and, when the differences are identified, the real DOM will re-render only the changed part. This process is much faster and more efficient than working directly with the DOM.</li>
                <li>Two-way data binding was an advantage for Angular, and React’s one-way data binding may be an advantage as well. This approach makes the view react to any changes made to the model, but the changes in the view itself cannot affect the model. As a result, the data only flows in one direction, reducing the possibility of any side effects.</li>
                <li>Unlike Angular, React doesn’t require you to use classes. Your application UI can be created using pure functions, simplifying the codebase.</li>
            </p>
            <p className="mt-3"><strong>Vue.js</strong></p>
            <p className="mt-3">Vue.js is a popular Angular and React alternative. This progressive framework for UI building is gaining popularity. It first became extremely popular in China, and is now becoming popular in the West as well.</p>
            <p className="mt-3"><strong>Advantages of Vue
</strong></p>
            <p className="mt-3">
                <li>Just like Angular, Vue is an MVC (or Model-View-Controller) framework. The advantage of this is obvious – it allows  you to write well-structured code, which is extremely important when developing complex applications.</li>
                <li>One significant advantage of Vue is the small framework size as it doesn’t include many features right “out the box”, but the functionality is easily extended with a variety of third-party solutions. It is often compared with Angular, which is a monolithic framework that has a bunch of built-in features that are unlikely to be used in your app at all. Of course, tree-shaking allows you to eliminate unused code, but the framework size is still larger compared to what Vue offers. A full-featured Vue.js project with Vuex + vue-router weighs ~30kb gzipped. At the same time, an out-of-the-box, AOT-compiled application generated using angular-cli has a size of ~130kb gzipped. Its compact size and ability to include third-party modules to extend the functionality make Vue.js a wiser choice for those who care about reducing size, and therefore, improving the speed of the web app.</li>
                <li>Templates in Vue.js are written in HTML, making them readable without knowledge of other programming languages.</li>
                <li>Due to a lighter-weight virtual DOM implementation, apps built with Vue.js have the highest performance compared with other frontend frameworks.</li>
                <li>Vue.js automatically syncs the whole model with the DOM.</li>
            </p>
            <Link to='https://clockwise.software/blog/angular-vs-react-vs-vue/' className="text-success">More to visit</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
