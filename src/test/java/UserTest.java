import com.Gavin.bean.User;
import com.Gavin.config.SpringConfig;
import com.Gavin.mapper.UserMapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = SpringConfig.class)
public class UserTest {

    @Autowired
    private UserMapper userMapper;

    @Test
    public void fun1(){
        User user=new User("1","1","1","1","1");
        userMapper.addUser(user);
    }
}
