import React, { useState } from "react";
import Board from "../../components/Board/Board";
import Modal from "../../components/Modal/Modal";
import { addTask, updateTaskStatus } from "../../actions/actions";
import { useParams, useNavigate } from "react-router-dom";
import { projectsList } from "../../reducers/projectsListReducer";
import { useSelector, useDispatch } from "react-redux";
import { dateFormat } from "./DateFormat";
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
      setShowMore(false)
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTask({ ...task, taskId: new Date().valueOf(), [name]: value });
  };

  const handleSubmit = () => {
    const newTask = {
      taskId: task.taskId,
      headline: task.headline,
      description: task.description,
      status: "Queue",
      date: dateFormat(new Date()),
    };
    dispatch(addTask(projectId, newTask));
    setTask({
      headline: "",
      description: "",
    });
    setModalVisible(false);
  };


  const handleDrop = (taskId, newStatus) => {
    dispatch(updateTaskStatus(taskId, newStatus));
  };

  const [showMore, setShowMore] = useState({
    taskItem: null,
    show: false
  });

  const showMoreOfTask = (e, taskId) => {
    e.preventDefault();
    const showMoreTask = tasks.find((item) => item.taskId === taskId)
    setShowMore({
      taskItem: showMoreTask,
      show: true
    });    
  }



  if (!project) {
    return (
      <div>
        <h2>Project doesn't exist</h2>
      </div>
    );
  }

  return (
    <section className="project-item-page">
      {modalVisible && (
        <Modal
          modalClass="modal-project-page"
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
              <button className="btn-create" type="submit">
                Create Task
              </button>
            </form>
          }
        />
      )}

      {showMore && 
      <Modal 
          modalClass="modal-show-task"
          closeModal={closeModal}
          children={
            <div>
            <h3>{showMore.taskItem.headline}</h3>
            <p>{showMore.taskItem.description}</p>
            <p>{showMore.taskItem.status}</p>
            <p>{showMore.taskItem.date}</p>
            </div>
          }
      />
      }
      <div className="project-name-wrapper">
      <h1 className="project-title">{project.title}</h1>
      <button onClick={createTaskModal} className="btn-create">
        Create Task
      </button>
      </div>     
      {tasks.length === 0 ? (
        <div className="boards-wrapper">
          <Board onDrop={handleDrop} status="Queue" tasks={[]} showMoreOfTask={showMoreOfTask}/>
          <Board onDrop={handleDrop} status="Development" tasks={[]} showMoreOfTask={showMoreOfTask}/>
          <Board onDrop={handleDrop} status="Done" tasks={[]} showMoreOfTask={showMoreOfTask}/>
        </div>
      ) : (
        <div className="boards-wrapper">
          <Board onDrop={handleDrop}
            status="Queue"
            tasks={tasks.filter((item) => item.status === "Queue")}
            showMoreOfTask={showMoreOfTask}
          />
          <Board onDrop={handleDrop}
            status="Development"
            tasks={tasks.filter((item) => item.status === "Development")}
            showMoreOfTask={showMoreOfTask}
          />
          <Board onDrop={handleDrop}
            status="Done"
            tasks={tasks.filter((item) => item.status === "Done")}
            showMoreOfTask={showMoreOfTask}
          />
        </div>
      )}
    </section>
  );
}
