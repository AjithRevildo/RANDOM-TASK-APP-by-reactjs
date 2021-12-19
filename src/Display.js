import { Card } from "react-bootstrap";
export function Display({ taskname, time, status }) {
    return (
      <div className="tasklist">
        <Card border="dark" style={{ width: "18rem" }}>
          <Card.Header>{taskname}</Card.Header>
          <Card.Body>
            <Card.Title>{status}</Card.Title>
            <Card.Text>{time}</Card.Text>
          </Card.Body>
        </Card>
        <br />
      </div>
    );
  }