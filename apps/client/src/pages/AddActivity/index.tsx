import { Activity } from './components/Activity';
import { Date } from './components/Date';
import { User } from './components/User';
import './index.css'

export const AddActivity = () => {
  return (
    <div className="add_activity__container">
        <User />
        <Activity />
        <Date />
    </div>
  );
};
