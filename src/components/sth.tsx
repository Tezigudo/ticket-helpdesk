import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult, DraggableProvided} from 'react-beautiful-dnd';
import { Box, Typography, Button, Container } from '@mui/material';

interface TodoItemProps {
  item: string;
  index: number;
}

const TodoItem = ({ item, index }: TodoItemProps) => (
  <Draggable draggableId={`${index}`} index={index}>
    {(provided: DraggableProvided, snapshot: DraggableProvided) => (
      <Box
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        sx={{
          display: 'flex',
          alignItems: 'center',
          p: 1,
          my: 1,
          border: '1px solid grey',
          borderRadius: 1,
          backgroundColor: 'white',
          opacity: snapshot.isDragging ? 0.5 : 1        }}
      >
        <Typography>{item}</Typography>
        <Box flexGrow={1} />
        <Typography>Drag Handle</Typography>
      </Box>
    )}
  </Draggable>
);

interface TodoListProps {
  title: string;
  items: string[];
}

const TodoList = ({ title, items }: TodoListProps) => (
  <Box>
    <Typography variant="h6">{title}</Typography>
    <Droppable droppableId={title} type="TODO">
      {(provided: DraggableProvided, snapshot: DraggableProvided) => (
        <Box
          ref={provided.innerRef}
          {...provided.droppableProps}
          sx={{
            backgroundColor: snapshot.isDraggingOver ? 'grey.200' : 'white',
            p: 1,
            border: '1px solid grey',
            borderRadius: 1,
          }}
        >
          {items.map((item, index) => (
            <TodoItem key={index} item={item} index={index} />
          ))}
          {provided.placeholder}
        </Box>
      )}
    </Droppable>
    <Button variant="contained" sx={{ mt: 1 }}>
      Add Item
    </Button>
  </Box>
);

const DndKitGuide = () => {
  const [todos, setTodos] = useState(['Todo One', 'Todo Two', 'Todo Three']);

  const onDragEnd = (result: DropResult) => {
    // Handle drag and drop logic here
    console.log(result);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Dnd-kit Guide
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <TodoList title="Pending" items={todos} />
          <TodoList title="Accepted" items={[]} />
          <TodoList title="Resolved" items={[]} />
          <TodoList title="Rejected" items={[]} />
        </Box>
        <Button variant="contained" sx={{ mt: 2 }}>
          Add Container
        </Button>
      </Container>
    </DragDropContext>
  );
};

export default DndKitGuide;