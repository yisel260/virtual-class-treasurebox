"""add oders model

Revision ID: b84f54bb49ed
Revises: 3155fee9a5e9
Create Date: 2024-08-15 23:00:27.519429

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b84f54bb49ed'
down_revision = '3155fee9a5e9'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('orders',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('status', sa.String(), nullable=True),
    sa.Column('student_id', sa.Integer(), nullable=True),
    sa.Column('prize_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['prize_id'], ['prizes.id'], name=op.f('fk_orders_prize_id_prizes')),
    sa.ForeignKeyConstraint(['student_id'], ['students.id'], name=op.f('fk_orders_student_id_students')),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('orders')
    # ### end Alembic commands ###
