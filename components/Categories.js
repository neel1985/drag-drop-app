import { useContext } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { StorageContext } from '../StorageContext';
import styles from '../styles/Home.module.scss'

function Categories(category) {
    const context = useContext(StorageContext);
    const cssObj = {margin : 1 + 'rem', padding: 1.5 + 'rem'};
    const categoryId = category.categoryId;
    return (
        <Droppable droppableId={categoryId}>
            {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}
                    className={'col-2 ' + styles.grid} style={{margin: 0 + ' auto'}}>
                    <span className='text-center'>{categoryId.toUpperCase()}</span>
                        <div className={styles.card} style={cssObj}>
                            {
                                context.cateGories[categoryId].map((word, index) => (
                                    <div key={index}>
                                        {word}
                                    </div>
                                ))
                            }
                        </div>
                    <hr></hr>
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}

export default Categories