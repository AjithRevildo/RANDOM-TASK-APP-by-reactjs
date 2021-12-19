import "./App.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useFormik } from "formik";
import {Display} from "./Display";
import * as yup from "yup";
const formValidationSchema = yup.object({
  task: yup.string().min(4).required("Fill the topic"),
  source: yup.string().min(4).required("Paste the source code link"),
  url: yup.string().min(4).required("Paste the deployed url link"),
});
const task = [];
function App() {
  return (
    <div className="App">
      <Task />
    </div>
  );
}

function Task() {
  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =useFormik({initialValues: {task: "",time: "",status: "",},
validationSchema: formValidationSchema,
      onSubmit: (newtask) => {
        console.log("onsubmit", newtask);
        task.push(newtask);
        console.log(task);
      },
    });
  return (
    <div class="vol">
      <div className="header">
        <img
          src="https://cdn.pixabay.com/photo/2016/08/30/16/26/banner-1631293__340.jpg"
          alt="Task"
        />
        <h2>RANDOM TASK</h2>
      <Form onSubmit={handleSubmit} className="task">
        <Form.Label>Task name:</Form.Label>
        <Form.Control id="task" name="task" size="lg" type="text" value={values.task} placeholder="Enter the Topic"onChange={handleChange}onBlur={handleBlur} />
        {errors.task && touched.task && errors.task}

        <Form.Label>Source Code:</Form.Label>
        <Form.Control id="source"name="source"size="lg"type="link" value={values.source}placeholder="Enter source code link"onChange={handleChange}onBlur={handleBlur}/>
        {errors.source && touched.source && errors.source}

        <Form.Label>Deployed Url</Form.Label>
        <Form.Control id="url"name="url"size="lg"type="link"value={values.url}placeholder="Enter the deployed url link"onChange={handleChange}onBlur={handleBlur}/>
        {errors.url && touched.url && errors.url}
        <br />

        <Button variant="primary" type="submit" class="vol">
          Add Button
        </Button>

      </Form>
      <Data task={task} />
     </div>
   </div>
  );
  }

function Data({ task }) {
  console.log(task);
  return (
    <div>
      <h4>TASKS</h4>
      <div className="display">
        {task.map((task, index) => (
          <Display taskname={task.task} time={task.time} status={task.status} />
        ))}
        </div>
        <div className="footer">
        <img
         src="https://cdn.pixabay.com/photo/2016/08/30/16/26/banner-1631293__340.jpg"
          alt="Task"
        /></div>
      </div>
  );
}
<div><Display/></div>
export default App;
