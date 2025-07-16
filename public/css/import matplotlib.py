import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle

# Grid dimensions
cols = 4
rows = 6

fig, ax = plt.subplots()

# Draw grid lines
ax.set_xticks(range(cols + 1))
ax.set_yticks(range(rows + 1))
ax.grid(True)

# Highlight a rectangle that spans 2 columns and 5 rows
# Start at column line 1 (i.e., second column) and row line 0
rect = Rectangle((1, 0), 2, 5, fill=False)
ax.add_patch(rect)

# Adjust axes
ax.invert_yaxis()
ax.set_aspect('equal')
ax.set_xlim(0, cols)
ax.set_ylim(0, rows)

# Labels and title
ax.set_xlabel('Column Lines')
ax.set_ylabel('Row Lines')
ax.set_title('Example: grid-column: span 2; grid-row: span 5')

plt.show()
