import './Message.css';
import underline from './underline.svg';

const Message = () => {
  return (
    <div className='landing'>
      <div className='landing-intro'>
        <div>
          We offer innovative{' '}
          <p id='underlined'>
            opportunities{' '}
            <img id='underline' src={underline} alt='underline-alt'></img>
          </p>
          and deliver results that keep your brand ahead of the game
        </div>
      </div>
    </div>
  );
};

export default Message;
