"""adds Prize model

Revision ID: 3155fee9a5e9
Revises: 2885d71b8cef
Create Date: 2024-07-31 20:09:31.137728

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3155fee9a5e9'
down_revision = '2885d71b8cef'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('prizes',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('foto', sa.String(), nullable=True),
    sa.Column('description', sa.String(), nullable=True),
    sa.Column('point_value', sa.Integer(), nullable=True),
    sa.Column('inventory', sa.Integer(), nullable=True),
    sa.Column('number_requested', sa.Integer(), nullable=True),
    sa.Column('teacher_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['teacher_id'], ['teachers.id'], name=op.f('fk_prizes_teacher_id_teachers')),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('prizes')
    # ### end Alembic commands ###
