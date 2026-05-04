import React, { useState } from 'react';
import {
  Container,
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Avatar,
  Typography,
  Grid,
  Paper,
  Stack,
  Divider,
  Alert,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

export default function UserDashboard() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('userProfile');
    return saved
      ? JSON.parse(saved)
      : {
          fullName: 'John Doe',
          email: 'john@example.com',
          phone: '+1 234 567 8900',
          location: 'New York, USA',
          bio: 'Passionate developer and learner',
          avatar: '👨‍💻',
        };
  });

  const [editData, setEditData] = useState(user);

  const handleSave = () => {
    setUser(editData);
    localStorage.setItem('userProfile', JSON.stringify(editData));
    setIsEditing(false);
  };

  const handleReset = () => {
    setEditData(user);
    setIsEditing(false);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" sx={{ mb: 4, fontWeight: 'bold' }}>
        👤 User Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Profile Card */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar sx={{ width: 80, height: 80, fontSize: '40px', bgcolor: 'primary.main' }}>
                    {user.avatar}
                  </Avatar>
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                      {user.fullName}
                    </Typography>
                    <Typography color="text.secondary">{user.email}</Typography>
                  </Box>
                </Box>
                <Button
                  variant={isEditing ? 'outlined' : 'contained'}
                  color={isEditing ? 'error' : 'primary'}
                  onClick={() => (isEditing ? handleReset() : setIsEditing(true))}
                  startIcon={<EditIcon />}
                >
                  {isEditing ? 'Cancel' : 'Edit'}
                </Button>
              </Box>

              <Divider sx={{ my: 2 }} />

              {isEditing ? (
                <Box>
                  <Stack spacing={2} sx={{ mb: 3 }}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      value={editData.fullName}
                      onChange={(e) => setEditData({ ...editData, fullName: e.target.value })}
                    />
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      value={editData.email}
                      onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                    />
                    <TextField
                      fullWidth
                      label="Phone"
                      value={editData.phone}
                      onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
                    />
                    <TextField
                      fullWidth
                      label="Location"
                      value={editData.location}
                      onChange={(e) => setEditData({ ...editData, location: e.target.value })}
                    />
                    <TextField
                      fullWidth
                      label="Bio"
                      value={editData.bio}
                      onChange={(e) => setEditData({ ...editData, bio: e.target.value })}
                      multiline
                      rows={3}
                    />
                  </Stack>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={handleSave}
                    fullWidth
                    startIcon={<SaveIcon />}
                  >
                    Save Changes
                  </Button>
                </Box>
              ) : (
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography color="text.secondary">Phone:</Typography>
                    <Typography>{user.phone}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography color="text.secondary">Location:</Typography>
                    <Typography>{user.location}</Typography>
                  </Box>
                  <Divider />
                  <Typography color="text.secondary" sx={{ mb: 1 }}>
                    Bio:
                  </Typography>
                  <Typography>{user.bio}</Typography>
                </Stack>
              )}
            </CardContent>
          </Card>
        </Grid>

        {/* Stats */}
        <Grid item xs={12} sm={6}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold', mb: 1 }}>
              {localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')).length : 0}
            </Typography>
            <Typography color="text.secondary">Active Todos</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h4" color="success.main" sx={{ fontWeight: 'bold', mb: 1 }}>
              {localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')).length : 0}
            </Typography>
            <Typography color="text.secondary">Saved Notes</Typography>
          </Paper>
        </Grid>

        {/* About Section */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                💡 About This Dashboard
              </Typography>
              <Alert severity="info">
                This is your personal dashboard. You can manage your profile, track your todos, 
                organize your notes, and shop with confidence. All your data is saved locally in your browser.
              </Alert>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
