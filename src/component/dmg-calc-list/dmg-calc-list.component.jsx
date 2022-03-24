import React from "react";
import { Link } from "react-router-dom";

//CSS
import "./dmg-calc-list.css";

function DmgCalcList() {
  return (
    <>
      <table className="dmg-calc-list">
        <thead>
          <tr>
            <td>
              <Link to="/create">
                <button>Add</button>
              </Link>
            </td>
            <td>Description</td>
            <td>Test Description</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default DmgCalcList;
