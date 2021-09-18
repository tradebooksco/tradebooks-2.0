import 'bootstrap/dist/css/bootstrap.min.css';
import {ProgressBar} from 'react-bootstrap';
import "./progress.css";

function LinearProgress(props) {
  var isLoading=props.isLoading;
  if(!isLoading){
    return <div/>
  }
  return (
    <div><ProgressBar animated now={100} className="progress" variant="custom" style={{height:"5px"}}/></div>
  );
}
export default LinearProgress;