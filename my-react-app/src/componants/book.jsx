import React, { useState } from "react";
import "./book.css";
import Nav from "./nav";

function Book() {
  const [dataa, setDataa] = useState([]);
  const [newUser, setNewUser] = useState({
    name: "",
    date: "",
    time: "",
  });

  const [editId, setEditId] = useState(null);
  const [editUser, setEditUser] = useState({
    name: "",
    date: "",
    time: "",
  });

  const handleAddUser = (e) => {
    e.preventDefault();

    const userNum = {
      id: dataa.length + 1,
      name: newUser.name,
      date: newUser.date,
      time: newUser.time,
    };

    setDataa([...dataa, userNum]);
    setNewUser({ name: "", date: "", time: "" });
  };

  const handleDelet = (id) => {
    setDataa((prev) => prev.filter((item) => item.id !== id));
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setEditUser({
      name: item.name,
      date: item.date,
      time: item.time,
    });
  };

  const handleSaveEdit = (id) => {
    setDataa((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, ...editUser } : item
      )
    );
    setEditId(null);
    setEditUser({ name: "", date: "", time: "" });
  };

  return (
    <div className="b1">
      <Nav />
      <div className="bbb1">
      

      <form onSubmit={handleAddUser} className="bo3">
        <h2>Booking Box</h2>

        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) =>
            setNewUser({ ...newUser, name: e.target.value })
          }
        />

        <input
          type="date"
          value={newUser.date}
          onChange={(e) =>
            setNewUser({ ...newUser, date: e.target.value })
          }
        />

        <input
          type="time"
          value={newUser.time}
          onChange={(e) =>
            setNewUser({ ...newUser, time: e.target.value })
          }
        />

        <button type="submit">Submit</button>
      </form></div>
      <div className=" bo4">
      <h2>Current Bookings</h2>

      <table >
        <thead>
          <tr>
            <th>Num</th>
            <th>Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {dataa.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>

              {editId === item.id ? (
                <>
                  <td>
                    <input
                      type="text"
                      value={editUser.name}
                      onChange={(e) =>
                        setEditUser({ ...editUser, name: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      value={editUser.date}
                      onChange={(e) =>
                        setEditUser({ ...editUser, date: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      value={editUser.time}
                      onChange={(e) =>
                        setEditUser({ ...editUser, time: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <button  className="nn1"  onClick={() => handleSaveEdit(item.id)}>
                      save
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td>{item.name}</td>
                  <td>{item.date}</td>
                  <td>{item.time}</td>
                  <td>
                    <button className="nn1" onClick={() => handleEdit(item)}>edit</button>
                    <button  className="nn1" onClick={() => handleDelet(item.id)}>delete</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default Book;



