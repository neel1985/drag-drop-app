import { Droppable, Draggable } from 'react-beautiful-dnd'
import styles from '../styles/Home.module.scss';

function Words(...details) {
    const wordId = details[0].id;
    const wordIndex = details[0].index;
  return (
        <Draggable draggableId={wordId} index={wordIndex}>
            {(provided) => (
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                    className={'col-2 ' + styles.grid}>
                    <div className={styles.card + ' mb-4'}>
                        <span className='text-center'>{wordId.toUpperCase()}</span>
                    </div>
                </div>
            )}
        </Draggable>        
  )
}

export default Words