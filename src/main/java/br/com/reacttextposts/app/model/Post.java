package br.com.reacttextposts.app.model;

import java.time.Instant;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Entity
public class Post {

	@Id
	@GeneratedValue
	private Long id;	
	@NotBlank(message = "{name.not.blank}")
	private String owner;
	@Email(message = "{email.not.valid}") 
	@NotBlank(message = "{email.not.blank}")
	private String email;
	@Lob
	@NotBlank(message = "{message.not.blank}")
	@Column(length = 500)
	private String message;
	private Long upVotes;
	private Instant postDate;
	
	public Post() {
		super();
	}
	
	public Post(String owner, String email, String message) {
		super();
		this.owner = owner;
		this.email = email;
		this.message = message;
		this.upVotes = 0L;
		this.postDate = Instant.now();
	}



	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getOwner() {
		return owner;
	}
	public void setOwner(String owner) {
		this.owner = owner;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public Long getUpVotes() {
		return upVotes;
	}
	public void setUpVotes(Long upVotes) {
		this.upVotes = upVotes;
	}
	public Instant getPostDate() {
		return postDate;
	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((email == null) ? 0 : email.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((message == null) ? 0 : message.hashCode());
		result = prime * result + ((owner == null) ? 0 : owner.hashCode());
		result = prime * result + ((postDate == null) ? 0 : postDate.hashCode());
		result = prime * result + ((upVotes == null) ? 0 : upVotes.hashCode());
		return result;
	}
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Post other = (Post) obj;
		if (email == null) {
			if (other.email != null)
				return false;
		} else if (!email.equals(other.email))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (message == null) {
			if (other.message != null)
				return false;
		} else if (!message.equals(other.message))
			return false;
		if (owner == null) {
			if (other.owner != null)
				return false;
		} else if (!owner.equals(other.owner))
			return false;
		if (postDate == null) {
			if (other.postDate != null)
				return false;
		} else if (!postDate.equals(other.postDate))
			return false;
		if (upVotes == null) {
			if (other.upVotes != null)
				return false;
		} else if (!upVotes.equals(other.upVotes))
			return false;
		return true;
	}
	
	@Override
	public String toString() {
		return "Post [id=" + id + ", owner=" + owner + ", email=" + email + ", message=" + message + ", upVotes="
				+ upVotes + ", postDate=" + postDate + "]";
	}
	
	
}
