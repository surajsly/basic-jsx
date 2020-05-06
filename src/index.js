// Import the React and reactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

//Create React Component
const App = function () {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure yow want to do it pkaka na darega tho nhai ?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Sam"
          date="Today at 6:00PM"
          text="nice post"
          pic={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          date="Yesterday at 7:30PM"
          text="good"
          pic={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jane"
          date="Yesterday at 7:00PM"
          text="goucha"
          pic={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

// Take the React Component and show it on the Screen
ReactDOM.render(<App />, document.querySelector("#root"));
