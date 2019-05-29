package br.com.reacttextposts.app.web;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
		try {
			Post newPost = new Post(post.getOwner(), post.getEmail(), post.getMessage());
			Post result = postRepository.save(newPost);
			return ResponseEntity.created(new URI("/api/post/" + result.getId())).body(result);			
		} catch(Exception e) {
			System.out.println(e.getMessage());
			return (ResponseEntity<Post>) ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@CrossOrigin
	@PutMapping("/post/{postId}")
	ResponseEntity<?> upVote(@PathVariable("postId") long postId) throws URISyntaxException {
		try {
			Post post = this.postRepository.getOne(postId);			
			post.setUpVotes(post.getUpVotes() + 1);						
			Post result = postRepository.save(post);
			return ResponseEntity.accepted().body(result);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return (ResponseEntity<?>) ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}
	
	
}
