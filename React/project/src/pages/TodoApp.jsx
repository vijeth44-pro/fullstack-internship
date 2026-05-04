import React, { useState, useEffect } from 'react';
import {
  Container,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Checkbox,
  IconButton,
  Box,
  Typography,
  Paper,
  Chip,
  Stack,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

export default function TodoApp() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all'); // all, active, completed

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (input.trim() === '') return;
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: input,
        completed: false,
        createdAt: new Date().toLocaleDateString(),
      },
    ]);
    setInput('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const stats = {
    total: todos.length,
    completed: todos.filter(t => t.completed).length,
    active: todos.filter(t => !t.completed).length,
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', textAlign: 'center' }}>
          📝 My Todo List
        </Typography>

        {/* Stats */}
        <Stack direction="row" spacing={2} sx={{ mb: 3 }} justifyContent="center">
          <Chip
            label={`Total: ${stats.total}`}
            color="primary"
            variant="outlined"
          />
          <Chip
            label={`Active: ${stats.active}`}
            color="warning"
            variant="outlined"
          />
          <Chip
            label={`Done: ${stats.completed}`}
            color="success"
            variant="outlined"
          />
        </Stack>

        {/* Input Section */}
        <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
          <TextField
            fullWidth
            placeholder="Add a new todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            size="small"
            variant="outlined"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={addTodo}
            startIcon={<AddIcon />}
          >
            Add
          </Button>
        </Box>

        {/* Filter Buttons */}
        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          {['all', 'active', 'completed'].map(f => (
            <Button
              key={f}
              variant={filter === f ? 'contained' : 'outlined'}
              size="small"
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </Button>
          ))}
        </Stack>

        {/* Todo List */}
        <List>
          {filteredTodos.length > 0 ? (
            filteredTodos.map(todo => (
              <ListItem
                key={todo.id}
                sx={{
                  mb: 1,
                  bgcolor: todo.completed ? 'action.hover' : 'background.paper',
                  borderRadius: 1,
                  '&:hover': { bgcolor: 'action.selected' },
                }}
                secondaryAction={
                  <IconButton
                    edge="end"
                    onClick={() => deleteTodo(todo.id)}
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        textDecoration: todo.completed ? 'line-through' : 'none',
                        opacity: todo.completed ? 0.6 : 1,
                      }}
                    >
                      {todo.text}
                    </Typography>
                  }
                  secondary={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography variant="caption">{todo.createdAt}</Typography>
                      {todo.completed ? (
                        <CheckCircleIcon sx={{ fontSize: 16, color: 'success.main' }} />
                      ) : (
                        <CancelIcon sx={{ fontSize: 16, color: 'warning.main' }} />
                      )}
                    </Box>
                  }
                />
              </ListItem>
            ))
          ) : (
            <Typography sx={{ textAlign: 'center', py: 3, color: 'text.secondary' }}>
              {filter === 'all' && todos.length === 0
                ? '✨ No todos yet! Create one to get started'
                : `No ${filter} todos`}
            </Typography>
          )}
        </List>
      </Paper>
    </Container>
  );
}
