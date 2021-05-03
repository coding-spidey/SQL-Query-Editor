import NavBar from "../Navbar/NavBar";
import Lists from "../Lists/lists";
import CodeEditor from "../CodeEditor/CodeEditor";
import { Container, Row, Col } from "react-bootstrap";
import { CsvToHtmlTable } from "react-csv-to-table";
import "./Layout.css";

const Layout = () => {
  const data = `employeeID,lastName,firstName,title,titleOfCourtesy,birthDate,hireDate,address,city,region,postalCode,country,homePhone,extension,reportsTo
  1,Davolio,Nancy,Sales Representative,Ms.,1948-12-08,1992-05-01,507 20th Ave. E. Apt. 2A,Seattle,WA,98122,USA,(206) 555-9857,5467,2
  2,Fuller,Andrew,Vice President Sales,Dr.,1952-02-19,1992-08-14,908 W. Capital Way,Tacoma,WA,98401,USA,(206) 555-9482,3457,NULL
  3,Leverling,Janet,Sales Representative,Ms.,1963-08-30,1992-04-01,722 Moss Bay Blvd.,Kirkland,WA,98033,USA,(206) 555-3412,3355,2
  4,Peacock,Margaret,Sales Representative,Mrs.,1937-09-19,1993-05-03,4110 Old Redmond Rd.,Redmond,WA,98052,USA,(206) 555-8122,5176,2
  5,Buchanan,Steven,Sales Manager,Mr.,1955-03-04,1993-10-17,14 Garrett Hill,London,NULL,SW1 8JR,UK,(71) 555-4848,3453,2
  6,Suyama,Michael,Sales Representative,Mr.,1963-07-02,1993-10-17,Coventry House Miner Rd.,London,NULL,EC2 7JR,UK,(71) 555-7773,428,5
  7,King,Robert,Sales Representative,Mr.,1960-05-29,1994-01-02,Edgeham Hollow Winchester Way,London,NULL,RG1 9SP,UK,(71) 555-5598,465,5
  8,Callahan,Laura,Inside Sales Coordinator,Ms.,1958-01-09,1994-03-05,4726 11th Ave. N.E.,Seattle,WA,98105,USA,(206) 555-1189,2344,2
  9,Dodsworth,Anne,Sales Representative,Ms.,1966-01-27,1994-11-15,7 Houndstooth Rd.,London,NULL,WG2 7LT,UK,(71) 555-4444,452,5`;
  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <Col md={4}>
            <Lists />
          </Col>
          <Col md={8}>
            <CodeEditor />
            <h4 className="mb-3">Output :</h4>
            <div className="table-responsive text-capitalize">
              <CsvToHtmlTable
                data={data}
                csvDelimiter=","
                tableClassName="table table-striped table-hover text-small"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Layout;
