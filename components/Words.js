import { Draggable } from 'react-beautiful-dnd'
import styles from '../styles/Home.module.scss';

function Words(...details) {
    const wordArr = details[0].wordProp;
  return (
    wordArr.map((word, index) => (
        <Draggable key={word} draggableId={word} index={index}>
            {(provided) => (
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                    className={'col-2 ' + styles.grid}>
                    <div className={styles.card + ' mb-4'}>
                        <span className='text-center'>{word.toUpperCase()}</span>
                    </div>
                </div>
            )}
        </Draggable>
    ))     
  )
}

export default Words