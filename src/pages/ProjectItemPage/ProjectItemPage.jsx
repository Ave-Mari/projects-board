import React, { useState } from "react";
import Board from "../../components/Board/Board";
import Modal from "../../components/Modal/Modal";
import { addTask } from '../../actions/actions'
import { useParams, useNavigate } from "react-router-dom";
import { projectsList } from "../../reducers/projectsListReducer";
import { useSelector, useDispatch } from "react-redux";
//styles
import "./ProjectItemPage.scss";

export default function ProjectItemPage() {
  const [modalVisible, setModalVisible] = useState(false);
  const [task, setTask] = useState({
    headline: "",
    description: "",
  });

  const dispatch = useDispatch();

  const { projectId } = useParams();
  const projectsState = useSelector((state) => state.projectsList);
  const project = projectsState.find((p) => p.projectId === Number(projectId));
  const tasks = project.tasks;

  const createTaskModal = (e) => {
    e.preventDefault();
    setModalVisible(true);
  };

  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setModalVisible(false);
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTask({...task, [name]: value})
  }

  const handleSubmit = () => {
    const newTask = {
      projectId: new Date().valueOf(),
      headline: task.headline,
      description: task.description,
      status: 'Queue'
    }
    dispatch(addTask(projectId, newTask));
    setTask({
      headline: "",
      description: "",
    });
    setModalVisible(false);
  };

  if (!project) {
    return (
      <div>
        <h2>Project doesn't exist</h2>
      </div>
    );
  }

  return (
    <section>
      {modalVisible && (
        <Modal
          closeModal={closeModal}
          children={
            <form onSubmit={handleSubmit}>
              <input
                onChange={handleChange}
                type="text"
                placeholder="Headline"
                name="headline"
                value={task.headline}
              />
              <input
                onChange={handleChange}
                type="text"
                placeholder="Description"
                name="description"
                value={task.description}
              />
              <button className="btn-create" type="submit">Create Task</button>
            </form>
          }
        />
      )}
      <h1>{project.title}</h1>
      <button onClick={createTaskModal} className="btn-create">Create Task</button>
      {tasks.length === 0 ? (
        <div className="boards-wrapper">
          <Board status="Queue" tasks={[]} />
          <Board status="Development" tasks={[]} />
          <Board status="Done" tasks={[]} />
        </div>
      ) : (
        <div className="boards-wrapper">
          <Board
            status="Queue"
            tasks={tasks.filter((item) => item.status === "Queue")}
          />
          <Board
            status="Development"
            tasks={tasks.filter((item) => item.status === "Development")}
          />
          <Board
            status="Done"
            tasks={tasks.filter((item) => item.status === "Done")}
          />
        </div>
      )}
    </section>
  );
}
