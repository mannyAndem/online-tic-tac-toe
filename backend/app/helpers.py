class TicTacToeGame:
    def __init__(self):
        self.board = [''] * 9
        self.current_player = 'X'

    def make_move(self, player, position):
        if player == self.current_player and 0 <= position < 9 and not self.board[position]:
            self.board[position] = player
            self.current_player = 'O' if player == 'X' else 'X'
            return self.get_game_state()
        return None

    def get_game_state(self):
        pass
        # Implement logic to check for a winner or a draw
        # Return the current game state (e.g., board, winner, or draw)