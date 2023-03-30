import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CustomFooter() {
  return (
    <Card className="text-center">
      <Card.Header>©Epi-book </Card.Header>
      <Card.Body>
        <Button variant="outline-primary">CONTATTACI</Button>
      </Card.Body>
    
    </Card>
  );
}

export default CustomFooter;