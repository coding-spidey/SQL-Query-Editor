import "./lists.css";
import { InputGroup } from "react-bootstrap";

const Lists = () => {
  return (
    <>
      <h5>Schemas</h5>
      <InputGroup className="mb-3">
        <div className="form-outline">
          <input
            type="search"
            id="form1"
            className="form-control"
            placeholder="Filter Objects"
          />
        </div>
        <button type="button" className="btn btn-primary">
          <i className="fas fa-search"></i>
        </button>
      </InputGroup>
      <div>
        <div>
          <div className="fas fa-angle-right mr-2"></div>
          <div className="fas fa-server mr-2"></div>
          <p className="inline">Categories</p>
        </div>
        <div>
          <div className="fas fa-angle-right mr-2"></div>
          <div className="fas fa-server mr-2"></div>
          <p className="inline">Customers</p>
        </div>
        <div>
          <div className="fas fa-angle-right mr-2"></div>
          <div className="fas fa-server mr-2"></div>
          <p className="inline">Orders</p>
        </div>
        <div>
          <div className="fas fa-angle-down mr-2"></div>
          <div className="fas fa-server mr-2"></div>
          <p className="inline">Employees</p>
        </div>
        <div className="ml-4">
          <div>
            <div className="fas fa-angle-down mr-2"></div>
            <div className="fas fa-table mr-2"></div>
            <p className="inline">Tables</p>
          </div>
        </div>
        <div className="ml-5">
          <div>
            <div className="fas fa-angle-right mr-2"></div>
            <div className="fas fa-table mr-2"></div>
            <p className="inline">Employee Territories</p>
          </div>
          <div>
            <div className="fas fa-angle-right mr-2"></div>
            <div className="fas fa-table mr-2"></div>
            <p className="inline">Employees</p>
          </div>
        </div>
        <div>
          <div className="fas fa-angle-right mr-2"></div>
          <div className="fas fa-server mr-2"></div>
          <p className="inline">Orders</p>
        </div>
        <div>
          <div className="fas fa-angle-right mr-2"></div>
          <div className="fas fa-server mr-2"></div>
          <p className="inline">Shippers</p>
        </div>
      </div>
    </>
  );
};

export default Lists;
