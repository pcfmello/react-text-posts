package br.com.reacttextposts.app.web;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.reacttextposts.app.model.Post;
import br.com.reacttextposts.app.repository.PostRepository;

@RestController
@RequestMapping("/api")
public class PostController {
	
	private PostRepository postRepository;
	
	public PostController(PostRepository postRepository) {
		this.postRepository = postRepository;
	}
	
	@CrossOrigin
	@GetMapping("/posts")
	Collection<Post> posts() {
		return postRepository.findByOrderByPostDateDesc();
	}
	
	@CrossOrigin
	@PostMapping("/post")
	ResponseEntity<Post> save(@Valid @RequestBody Post post) throws URISyntaxException {
		Post newPost = new Post(post.getOwner(), post.getEmail(), post.getMessage());
		Post result = postRepository.save(newPost);
		return ResponseEntity.created(new URI("/api/post/" + result.getId())).body(result);
	}
}
