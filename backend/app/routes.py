from flask import render_template
from app import app, socketio
from .helpers import TicTacToeGame

game = TicTacToeGame()


@socketio.on('connect')
def handle_connect():
    print('Client connected')

@socketio.on('disconnect')
def handle_disconnect():
    print('Client disconnected')

@socketio.on('update_game_state')
def handle_update_game_state(data):
    move = data.get('move')
    position = data.get('position')
    if move and position is not None:
        updated_state = game.make_move(move, position)
        socketio.emit('updated_game_state', updated_state, broadcast=True)
