import React from "react";
import bell from "../../assets/default_bell.svg";
import "./Props.css";
const Props = () => {
  return (
    <div className='OuterContainer'>
      <table>
        <tbody>
          <tr>
            <th>Name </th>
            <th>Description</th>
            <th>Type</th>
            <th>Default</th>
          </tr>
          <tr>
            <td>data</td>
            <td>
              It is array of objects consists of notification messages to be
              rendered.
              <br />{" "}
              <span className='schema'>
                Schema : {"{image, message ,detailPage, receivedTime}"}
              </span>
            </td>
            <td>Array | string (URL) | JSON</td>
            <td>[]</td>
          </tr>
          <tr>
            <td>notificationCard</td>
            <td>
              Custom react component, either class component or functional
              component that can be render for every message instead of default
              one.
            </td>
            <td>React.Component | function</td>
            <td>null</td>
          </tr>
          <tr>
            <td>classNamePrefix</td>
            <td>
              Custom CSS styles can be given by providing className prefix and
              including the respective file.
            </td>
            <td>string</td>
            <td>""</td>
          </tr>
          <tr>
            <td>header</td>
            <td>Content for header title ,option and its event.</td>
            <td>Object</td>
            <td>
              {
                "{title : 'Notifications', option: {text: 'Mark all as read',onClick: ()=>{}}"
              }
            </td>
          </tr>
          <tr>
            <td>fetchData</td>
            <td>Function for fetching more data on pagination.</td>
            <td>function</td>
            <td>null</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>Notification icon can be provided as image.</td>
            <td>Image</td>
            <td>
              <img src={bell} height='20px' width='20px' alt='bell' />
            </td>
          </tr>
          <tr>
            <td>viewAllBtn</td>
            <td>
              View all option on bottom of notifications. <br />{" "}
              <span className='schema'>Schema : {"{text,onclick}"}</span>
            </td>
            <td>Object</td>
            <td>null</td>
          </tr>
          <tr>
            <td>height</td>
            <td>Overwrites the default height of the container.</td>
            <td>string | number</td>
            <td>null</td>
          </tr>
          <tr>
            <td>width</td>
            <td>Overwrites the default width of the container.</td>
            <td>string | number</td>
            <td>null</td>
          </tr>
          <tr>
            <td>headerBackgroundColor</td>
            <td>Background color for the header.</td>
            <td>string</td>
            <td>null</td>
          </tr>
          <tr>
            <td>cardOption</td>
            <td>Whether a default options on every message display or not.</td>
            <td>bool</td>
            <td>true</td>
          </tr>
          <tr>
            <td>markAsRead</td>
            <td>This a function that renders on every card.</td>
            <td>function</td>
            <td>null</td>
          </tr>
          <tr>
            <td>imagePosition</td>
            <td>To decide position of image in card.</td>
            <td>string</td>
            <td>left</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Props;
