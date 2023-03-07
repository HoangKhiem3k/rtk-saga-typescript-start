// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from 'features/auth/pages/LoginPage';
import { AdminLayout } from 'components/Layout';
import { NotFound, PrivateRoute } from 'components/Common';
import { history, HistoryRouter } from 'utils/HistoryRouter';

function App() {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/admin" element={<PrivateRoute />}>
          <Route path="/admin/*" element={<AdminLayout />} />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
