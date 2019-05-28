package br.com.reacttextposts.app.repository;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import br.com.reacttextposts.app.model.Post;

public interface PostRepository extends JpaRepository<Post, Long> {

	List<Post> findByOrderByPostDateDesc();
}
