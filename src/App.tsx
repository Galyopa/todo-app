import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import { TodoApp } from './components/todoApp';
import { TodosProvider } from './components/todosContext';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/">
        <Route
          index
          element={(
            <TodosProvider>
              <TodoApp />
            </TodosProvider>
          )}
        />
        <Route
          path=":filterBy"
          element={(
            <TodosProvider>
              <TodoApp />
            </TodosProvider>
          )}
        />
      </Route>
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route
        path="*"
        element={<h1>Page not found</h1>}
      />
    </Routes>
  );
};
