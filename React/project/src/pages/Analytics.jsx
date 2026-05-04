import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Paper,
  Card,
  CardContent,
  Typography,
  Box,
  LinearProgress,
  Stack,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DescriptionIcon from '@mui/icons-material/Description';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export default function Analytics() {
  const [stats, setStats] = useState({
    totalTodos: 0,
    completedTodos: 0,
    totalNotes: 0,
    totalCart: 0,
    completionRate: 0,
  });

  const [chartData, setChartData] = useState([
    { name: 'Todos', count: 0 },
    { name: 'Notes', count: 0 },
    { name: 'Cart Items', count: 0 },
  ]);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos') || '[]');
    const notes = JSON.parse(localStorage.getItem('notes') || '[]');

    const totalTodos = todos.length;
    const completedTodos = todos.filter(t => t.completed).length;
    const totalNotes = notes.length;
    const completionRate = totalTodos > 0 ? Math.round((completedTodos / totalTodos) * 100) : 0;

    setStats({
      totalTodos,
      completedTodos,
      totalNotes,
      totalCart: 0,
      completionRate,
    });

    setChartData([
      { name: 'Todos', count: totalTodos },
      { name: 'Notes', count: totalNotes },
      { name: 'Cart Items', count: 0 },
    ]);
  }, []);

  const COLORS = ['#1976d2', '#2e7d32', '#f57c00', '#c62828'];

  const completionData = [
    { name: 'Completed', value: stats.completedTodos },
    { name: 'Pending', value: stats.totalTodos - stats.completedTodos },
  ];

  const progressData = [
    { name: 'Todos', value: stats.completionRate },
    { name: 'Notes', value: Math.min(stats.totalNotes * 10, 100) },
    { name: 'Overall', value: (stats.completionRate + Math.min(stats.totalNotes * 10, 100)) / 2 },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" sx={{ mb: 4, fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: 1 }}>
        <TrendingUpIcon /> Analytics Dashboard
      </Typography>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <CheckCircleIcon />
                <Typography color="inherit" sx={{ opacity: 0.8 }}>
                  Active Todos
                </Typography>
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                {stats.totalTodos}
              </Typography>
              <Typography sx={{ opacity: 0.8, fontSize: '0.875rem', mt: 1 }}>
                {stats.completedTodos} completed
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: 'white' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <DescriptionIcon />
                <Typography color="inherit" sx={{ opacity: 0.8 }}>
                  Saved Notes
                </Typography>
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                {stats.totalNotes}
              </Typography>
              <Typography sx={{ opacity: 0.8, fontSize: '0.875rem', mt: 1 }}>
                Well organized
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', color: 'white' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <ShoppingCartIcon />
                <Typography color="inherit" sx={{ opacity: 0.8 }}>
                  Completion Rate
                </Typography>
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                {stats.completionRate}%
              </Typography>
              <Typography sx={{ opacity: 0.8, fontSize: '0.875rem', mt: 1 }}>
                Keep it up!
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' }}>
            <CardContent>
              <Typography sx={{ opacity: 0.7, mb: 1 }}>
                🔥 Streak
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                {Math.max(stats.completedTodos, 0)}
              </Typography>
              <Typography sx={{ opacity: 0.7, fontSize: '0.875rem', mt: 1 }}>
                Tasks completed
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Charts */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {/* Bar Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Content Overview
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#1976d2" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Pie Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Todo Completion
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={completionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {completionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>

      {/* Progress Bars */}
      <Grid item xs={12}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>
            Activity Progress
          </Typography>
          <Stack spacing={3}>
            {progressData.map((item, index) => (
              <Box key={item.name}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    {item.name}
                  </Typography>
                  <Chip label={`${item.value}%`} size="small" color="primary" />
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={item.value}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: '#e0e0e0',
                  }}
                />
              </Box>
            ))}
          </Stack>
        </Paper>
      </Grid>

      {/* Summary Table */}
      <Grid item xs={12} sx={{ mt: 3 }}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
            Summary Statistics
          </Typography>
          <TableContainer>
            <Table>
              <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>Metric</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                    Value
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                    Status
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Total Todos Created</TableCell>
                  <TableCell align="right">{stats.totalTodos}</TableCell>
                  <TableCell align="right">
                    <Chip label="Active" size="small" color="primary" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Completed Tasks</TableCell>
                  <TableCell align="right">{stats.completedTodos}</TableCell>
                  <TableCell align="right">
                    <Chip label="Done" size="small" color="success" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Notes Created</TableCell>
                  <TableCell align="right">{stats.totalNotes}</TableCell>
                  <TableCell align="right">
                    <Chip label="Saved" size="small" color="info" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Completion Rate</TableCell>
                  <TableCell align="right">{stats.completionRate}%</TableCell>
                  <TableCell align="right">
                    {stats.completionRate >= 50 ? (
                      <Chip label="Great!" size="small" color="success" />
                    ) : (
                      <Chip label="Keep Going" size="small" color="warning" />
                    )}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
    </Container>
  );
}
