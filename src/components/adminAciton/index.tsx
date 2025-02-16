import { Button } from 'antd';
import { EditOutlined, DeleteOutlined, KeyOutlined } from '@ant-design/icons';

<Button.Group>
  <Button
    type="primary"
    icon={<EditOutlined />}
    size="large"
    onClick={() => handleEdit(record)}
  />
  <Button
    type="primary"
    icon={<DeleteOutlined />}
    size="large"
    onClick={() => handleDelete(record)}
  />
  <Button
    type="primary"
    icon={<KeyOutlined />}
    size="large"
    onClick={() => handleKeyAction(record)}
  />
</Button.Group>