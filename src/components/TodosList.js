import React from 'react';
import TodoItems from './TodoItems'
class TodosList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <TodoItems
            key={todo.id}
            todo={todo}
            handleChangeProps={this.props.handleChangeProps}
            deleteTodo={this.props.deleteTodo}
          />
        ))}
      </ul>
    );
  }
}

export default TodosList;