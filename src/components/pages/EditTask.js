import React from "react";
import BodyTemplate from "../ui/BodyTemplate";
import { Link } from "react-router-dom";
import tasks from "../../mock-data/tasks";
import toDisplayDate from "date-fns/format";
const demoTask = tasks[1];

export default class EditTasks extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         checked: false,
      };
   }

   showDeleteButton() {
      this.setState({
         checked: !this.state.checked,
      });
   }

   render() {
      return (
         <BodyTemplate>
            <h3 className="pl-2 mt-3">EDIT TASK</h3>
            <div className="row mb-4 ml-3">
               <h6 className="text-muted">
                  {" "}
                  TASK SHOULD TAKE LESS THAN 15 MINUTES{" "}
               </h6>
            </div>

            <div className="col">
               <textarea
                  rows="4"
                  autoFocus={true}
                  defaultValue={demoTask.userTask}
                  className="editTaskTextArea"
               ></textarea>
               <div className="row">
                  <p className="text-muted mr-1 ml-4">Last Time Completed:</p>

                  <p>{toDisplayDate(demoTask.lastDone, " MMM. d, y")}</p>
               </div>
            </div>
            <div className="col">
               <div className="row justify-content-between mb-4">
                  <Link to="/all-tasks" className="btn edit-cancel col-4 ml-4">
                     CANCEL EDIT
                  </Link>
                  <Link to="/all-tasks" className="btn edit-save col-4 mr-4">
                     SAVE EDIT
                  </Link>
               </div>
            </div>
            <div className="custom-control custom-checkbox">
               <div className="row col-auto mb-4">
                  <div className="custom-control custom-checkbox ">
                     <input
                        type="checkbox"
                        className="custom-control-input delete-verify"
                        id="delete-check"
                        checked={this.state.checked}
                        onChange={() => {
                           this.showDeleteButton();
                        }}
                     />
                     <label
                        className="custom-control-label delete-verify"
                        htmlFor="delete-check"
                     >
                        Show delete button
                     </label>
                  </div>
               </div>
               {this.state.checked && (
                  <Link
                     to="/all-tasks"
                     className="btn btn-large btn-danger "
                     id="card-delete"
                  >
                     DELETE THIS TASK
                  </Link>
               )}
            </div>
         </BodyTemplate>
      );
   }
}
