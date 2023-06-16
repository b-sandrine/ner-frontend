import { useEffect, useState } from 'react'
import './Content.css'
import $ from 'jquery'
import axios from 'axios';

const Content = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/users")
            .then((response) => response.data)
            .then((data) => {
                setData(data)
                console.log(data)
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        const $table = $('#myTable');
        const $tbody = $table.find('tbody');

        data.forEach((item) => {
            const row = `
      <tr>
        <td>${item.fullnames}</td>
        <td>${item.email}</td>
        <td>${item.nid}</td>
        <td>${item.phoneNumber}</td>
        <td>${item.address}</td>
      </tr>
    `;

            $tbody.append(row);
        });
    }, [data]);
    return (
        <div className="content--container">
            <div className="header">
                <p>Users</p>
                <button>Add New User</button>
            </div>
            <div className="table">
                <table id="myTable">
                    <thead>
                        <tr>
                            <th>Names</th>
                            <th>Email</th>
                            <th>NID</th>
                            <th>Phone Number</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        </div>
    )
}

export default Content;